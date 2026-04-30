# CLAUDE.md — Agentic Lead Manager for Pakistan SaaS Sales

## Project overview

You are building an **autonomous agentic AI system** that runs daily, scrapes leads across Pakistan, enriches them with AI, scores them, and presents a local web dashboard the operator can open each morning to review leads and take action.

The operator sells **Software / SaaS / tech services** to businesses in **Lahore, Karachi, Islamabad, and Faisalabad**.

---

## Project structure

```
lead-agent/
├── CLAUDE.md                  ← this file
├── main.py                    ← entry point, orchestrates all agents
├── scheduler.py               ← runs main.py daily at 8am via APScheduler
├── dashboard/
│   ├── app.py                 ← Flask/FastAPI local dashboard server
│   ├── templates/
│   │   └── index.html         ← dashboard UI
│   └── static/
│       └── style.css
├── agents/
│   ├── __init__.py
│   ├── scraper_agent.py       ← finds raw leads from sources
│   ├── validator_agent.py     ← cleans and validates phone numbers
│   ├── scorer_agent.py        ← scores leads by SaaS relevance
│   ├── writer_agent.py        ← drafts outreach messages
│   └── reporter_agent.py      ← compiles daily digest to DB
├── tools/
│   ├── __init__.py
│   ├── google_maps.py         ← Google Maps Places API scraper
│   ├── facebook.py            ← Facebook Graph API / page scraper
│   ├── directories.py         ← Rozee.pk, PakistanYellowPages scraper
│   └── phone_validator.py     ← validates PK phone numbers
├── memory/
│   ├── __init__.py
│   ├── lead_db.py             ← SQLite ORM (SQLAlchemy)
│   └── schema.sql             ← DB schema
├── config.py                  ← all API keys, city list, settings
├── requirements.txt
└── .env                       ← secrets (never commit)
```

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Agent framework | **LangGraph** | Stateful agent loops, tool calling, multi-agent handoff |
| LLM | **Claude claude-sonnet-4-20250514** via Anthropic SDK | Reasoning, scoring, message drafting |
| Scraping | **Playwright** + **httpx** | Handles JS-heavy sites |
| Database | **SQLite + SQLAlchemy** | Local, zero-setup, persistent memory |
| Dashboard | **FastAPI + Jinja2** | Lightweight local web UI |
| Scheduler | **APScheduler** | Daily 8am cron-style trigger |
| Phone validation | **phonenumbers** library | Validates Pakistani number formats |

---

## Installation

```bash
# 1. Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt
playwright install chromium

# 3. Copy and fill in secrets
cp .env.example .env

# 4. Initialise the database
python -c "from memory.lead_db import init_db; init_db()"

# 5. Run the scheduler (stays running in background)
python scheduler.py

# 6. Open the dashboard (separate terminal)
python dashboard/app.py
# Visit: http://localhost:8000
```

---

## requirements.txt

```
anthropic>=0.25.0
langgraph>=0.1.0
langchain-anthropic>=0.1.0
playwright>=1.44.0
httpx>=0.27.0
beautifulsoup4>=4.12.0
fastapi>=0.111.0
uvicorn>=0.29.0
jinja2>=3.1.0
sqlalchemy>=2.0.0
apscheduler>=3.10.0
phonenumbers>=8.13.0
python-dotenv>=1.0.0
pydantic>=2.7.0
```

---

## .env.example

```
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_MAPS_API_KEY=...
FACEBOOK_ACCESS_TOKEN=...        # optional, for Graph API
SERPAPI_KEY=...                  # optional, fallback search
DASHBOARD_PORT=8000
DAILY_LEAD_TARGET=30             # how many leads to collect per day
```

---

## config.py

```python
from dotenv import load_dotenv
import os

load_dotenv()

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

TARGET_CITIES = ["Lahore", "Karachi", "Islamabad", "Faisalabad"]

# Industries most likely to need SaaS/tech services in Pakistan
TARGET_INDUSTRIES = [
    "software company",
    "IT company",
    "e-commerce store",
    "retail chain",
    "logistics company",
    "accounting firm",
    "real estate agency",
    "education institute",
    "hospital clinic",
    "manufacturing company",
    "import export business",
    "marketing agency",
]

DAILY_LEAD_TARGET = int(os.getenv("DAILY_LEAD_TARGET", 30))
DASHBOARD_PORT = int(os.getenv("DASHBOARD_PORT", 8000))

# Lead score thresholds
HOT_THRESHOLD = 75      # score >= 75 → Hot lead
WARM_THRESHOLD = 50     # score >= 50 → Warm lead
                        # score < 50  → Cold lead
```

---

## memory/schema.sql

```sql
CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    business_name TEXT,
    phone TEXT,
    email TEXT,
    city TEXT,
    industry TEXT,
    source TEXT,
    score INTEGER DEFAULT 0,
    temperature TEXT DEFAULT 'cold',  -- hot / warm / cold
    status TEXT DEFAULT 'new',        -- new / contacted / follow_up / closed / rejected
    outreach_message TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contacted_at TIMESTAMP,
    UNIQUE(phone)                     -- deduplication by phone
);

CREATE TABLE IF NOT EXISTS daily_runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    run_date DATE NOT NULL,
    leads_found INTEGER,
    leads_hot INTEGER,
    leads_warm INTEGER,
    status TEXT,
    ran_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## memory/lead_db.py

```python
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from datetime import date
import os

DB_PATH = "memory/leads.db"
engine = create_engine(f"sqlite:///{DB_PATH}")
Session = sessionmaker(bind=engine)

def init_db():
    with open("memory/schema.sql") as f:
        sql = f.read()
    with engine.connect() as conn:
        for statement in sql.split(";"):
            s = statement.strip()
            if s:
                conn.execute(text(s))
        conn.commit()
    print("Database initialised.")

def upsert_lead(lead: dict) -> bool:
    """Insert lead, skip if phone already exists. Returns True if inserted."""
    session = Session()
    try:
        existing = session.execute(
            text("SELECT id FROM leads WHERE phone = :phone"),
            {"phone": lead.get("phone")}
        ).fetchone()
        if existing:
            return False
        session.execute(text("""
            INSERT INTO leads (name, business_name, phone, email, city,
                               industry, source, score, temperature,
                               outreach_message)
            VALUES (:name, :business_name, :phone, :email, :city,
                    :industry, :source, :score, :temperature,
                    :outreach_message)
        """), lead)
        session.commit()
        return True
    finally:
        session.close()

def get_todays_leads(limit=50):
    session = Session()
    try:
        rows = session.execute(text("""
            SELECT * FROM leads
            WHERE DATE(created_at) = :today
            ORDER BY score DESC
            LIMIT :limit
        """), {"today": date.today().isoformat(), "limit": limit}).fetchall()
        return [dict(r._mapping) for r in rows]
    finally:
        session.close()

def update_lead_status(lead_id: int, status: str, notes: str = None):
    session = Session()
    try:
        session.execute(text("""
            UPDATE leads SET status = :status, notes = :notes,
            contacted_at = CASE WHEN :status = 'contacted'
                           THEN CURRENT_TIMESTAMP ELSE contacted_at END
            WHERE id = :id
        """), {"status": status, "notes": notes, "id": lead_id})
        session.commit()
    finally:
        session.close()

def log_run(leads_found, leads_hot, leads_warm, status="success"):
    session = Session()
    try:
        session.execute(text("""
            INSERT INTO daily_runs (run_date, leads_found, leads_hot, leads_warm, status)
            VALUES (:run_date, :leads_found, :leads_hot, :leads_warm, :status)
        """), {"run_date": date.today().isoformat(), "leads_found": leads_found,
               "leads_hot": leads_hot, "leads_warm": leads_warm, "status": status})
        session.commit()
    finally:
        session.close()
```

---

## tools/google_maps.py

```python
import httpx
from config import GOOGLE_MAPS_API_KEY, TARGET_CITIES, TARGET_INDUSTRIES

PLACES_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"
DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json"

def search_businesses(industry: str, city: str) -> list[dict]:
    """Search Google Maps for businesses matching industry in city."""
    raw_leads = []
    query = f"{industry} in {city} Pakistan"

    with httpx.Client(timeout=15) as client:
        resp = client.get(PLACES_URL, params={
            "query": query,
            "key": GOOGLE_MAPS_API_KEY,
            "region": "pk",
        })
        results = resp.json().get("results", [])

        for place in results[:10]:
            place_id = place.get("place_id")
            # Get full details including phone
            detail = client.get(DETAILS_URL, params={
                "place_id": place_id,
                "fields": "name,formatted_phone_number,website,rating,user_ratings_total",
                "key": GOOGLE_MAPS_API_KEY,
            }).json().get("result", {})

            phone = detail.get("formatted_phone_number", "")
            if not phone:
                continue

            raw_leads.append({
                "business_name": place.get("name"),
                "phone": phone,
                "city": city,
                "industry": industry,
                "source": "google_maps",
                "website": detail.get("website", ""),
                "rating": detail.get("rating", 0),
            })

    return raw_leads


def scrape_all() -> list[dict]:
    """Run across all cities and industries."""
    all_leads = []
    for city in TARGET_CITIES:
        for industry in TARGET_INDUSTRIES[:5]:  # limit per run to avoid quota
            leads = search_businesses(industry, city)
            all_leads.extend(leads)
    return all_leads
```

---

## tools/phone_validator.py

```python
import phonenumbers

def validate_pk_phone(raw: str) -> str | None:
    """
    Validates and normalises a Pakistani phone number.
    Returns E.164 format (+923001234567) or None if invalid.
    """
    try:
        # Try parsing with PK country code
        number = phonenumbers.parse(raw, "PK")
        if phonenumbers.is_valid_number(number):
            return phonenumbers.format_number(
                number, phonenumbers.PhoneNumberFormat.E164
            )
    except Exception:
        pass
    return None
```

---

## agents/scraper_agent.py

```python
from tools.google_maps import scrape_all as gmap_scrape
from tools.directories import scrape_all as dir_scrape
from tools.phone_validator import validate_pk_phone

def run() -> list[dict]:
    """
    Scraper agent: collects raw leads from all sources,
    normalises phone numbers, removes entries without valid phones.
    """
    print("[Scraper] Starting...")
    raw = []
    raw.extend(gmap_scrape())
    raw.extend(dir_scrape())

    cleaned = []
    for lead in raw:
        phone = validate_pk_phone(lead.get("phone", ""))
        if phone:
            lead["phone"] = phone
            cleaned.append(lead)

    print(f"[Scraper] Found {len(cleaned)} valid leads.")
    return cleaned
```

---

## agents/scorer_agent.py

```python
import anthropic
import json
from config import ANTHROPIC_API_KEY, HOT_THRESHOLD, WARM_THRESHOLD

client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

SCORE_PROMPT = """
You are a B2B sales qualification expert for a SaaS/tech company selling in Pakistan.

Rate the following business lead on a scale of 0-100 for likelihood to buy SaaS or tech services.

Scoring criteria:
- Industry fit: Does this business typically need software tools? (CRM, ERP, POS, inventory, etc.)
- Size signals: Rating count, website presence suggest bigger businesses
- Growth potential: Is this an industry growing in Pakistan (e-commerce, logistics, education, health)?
- Decision maker access: Can we likely reach the owner/manager directly?

Lead data:
{lead_json}

Respond ONLY with valid JSON:
{{"score": <0-100>, "reason": "<one sentence why>", "suggested_product": "<what SaaS would help them>"}}
"""

def score_lead(lead: dict) -> dict:
    prompt = SCORE_PROMPT.format(lead_json=json.dumps(lead, ensure_ascii=False))
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}]
    )
    try:
        result = json.loads(response.content[0].text)
        score = int(result.get("score", 0))
        lead["score"] = score
        lead["temperature"] = (
            "hot" if score >= HOT_THRESHOLD else
            "warm" if score >= WARM_THRESHOLD else
            "cold"
        )
        lead["score_reason"] = result.get("reason", "")
        lead["suggested_product"] = result.get("suggested_product", "")
    except Exception:
        lead["score"] = 0
        lead["temperature"] = "cold"
    return lead

def run(leads: list[dict]) -> list[dict]:
    print(f"[Scorer] Scoring {len(leads)} leads...")
    scored = [score_lead(lead) for lead in leads]
    scored.sort(key=lambda x: x["score"], reverse=True)
    print(f"[Scorer] Done. Hot: {sum(1 for l in scored if l['temperature']=='hot')}")
    return scored
```

---

## agents/writer_agent.py

```python
import anthropic
from config import ANTHROPIC_API_KEY

client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

WRITE_PROMPT = """
You are a Pakistani B2B sales consultant writing WhatsApp outreach messages.

Write a short, friendly, professional WhatsApp message in Hinglish (mix of English and Urdu in Roman script) to this business owner.

Goal: Introduce our SaaS/tech services and get a reply.
Keep it under 4 lines. Sound human, not robotic. Mention their business name.
Reference the suggested product if relevant.

Lead:
- Business: {business_name}
- Industry: {industry}
- City: {city}
- Suggested product: {suggested_product}

Output ONLY the message text, nothing else.
"""

def write_message(lead: dict) -> str:
    prompt = WRITE_PROMPT.format(
        business_name=lead.get("business_name", "aap ka business"),
        industry=lead.get("industry", ""),
        city=lead.get("city", ""),
        suggested_product=lead.get("suggested_product", "software solution"),
    )
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.content[0].text.strip()

def run(leads: list[dict]) -> list[dict]:
    print("[Writer] Drafting outreach messages...")
    for lead in leads:
        if lead.get("temperature") in ("hot", "warm"):
            lead["outreach_message"] = write_message(lead)
    return leads
```

---

## main.py

```python
from agents import scraper_agent, scorer_agent, writer_agent
from memory.lead_db import upsert_lead, log_run
from datetime import datetime

def run_daily():
    print(f"\n{'='*50}")
    print(f"Lead Agent starting at {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"{'='*50}\n")

    # Step 1: Scrape
    leads = scraper_agent.run()

    # Step 2: Score
    leads = scorer_agent.run(leads)

    # Step 3: Write outreach messages for hot/warm leads
    leads = writer_agent.run(leads)

    # Step 4: Save to database (deduplication handled by upsert)
    saved = 0
    for lead in leads:
        if upsert_lead({
            "name": lead.get("business_name", "Unknown"),
            "business_name": lead.get("business_name"),
            "phone": lead.get("phone"),
            "email": lead.get("email", ""),
            "city": lead.get("city"),
            "industry": lead.get("industry"),
            "source": lead.get("source"),
            "score": lead.get("score", 0),
            "temperature": lead.get("temperature", "cold"),
            "outreach_message": lead.get("outreach_message", ""),
        }):
            saved += 1

    hot = sum(1 for l in leads if l.get("temperature") == "hot")
    warm = sum(1 for l in leads if l.get("temperature") == "warm")

    log_run(leads_found=saved, leads_hot=hot, leads_warm=warm)

    print(f"\n✓ Done. Saved {saved} new leads ({hot} hot, {warm} warm).")
    print(f"  Open dashboard: http://localhost:8000\n")

if __name__ == "__main__":
    run_daily()
```

---

## scheduler.py

```python
from apscheduler.schedulers.blocking import BlockingScheduler
from main import run_daily

scheduler = BlockingScheduler(timezone="Asia/Karachi")

# Run every day at 8:00 AM Pakistan Standard Time
scheduler.add_job(run_daily, "cron", hour=8, minute=0)

print("Scheduler started. Agent will run daily at 8:00 AM PKT.")
print("Press Ctrl+C to stop.\n")

try:
    scheduler.start()
except KeyboardInterrupt:
    print("Scheduler stopped.")
```

---

## dashboard/app.py

```python
from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
import uvicorn
from memory.lead_db import get_todays_leads, update_lead_status
from config import DASHBOARD_PORT

app = FastAPI()
templates = Jinja2Templates(directory="dashboard/templates")
app.mount("/static", StaticFiles(directory="dashboard/static"), name="static")

@app.get("/")
async def dashboard(request: Request):
    leads = get_todays_leads(limit=100)
    hot = [l for l in leads if l["temperature"] == "hot"]
    warm = [l for l in leads if l["temperature"] == "warm"]
    cold = [l for l in leads if l["temperature"] == "cold"]
    return templates.TemplateResponse("index.html", {
        "request": request,
        "hot": hot, "warm": warm, "cold": cold,
        "total": len(leads),
    })

@app.post("/update/{lead_id}")
async def update(lead_id: int, status: str = Form(...), notes: str = Form("")):
    update_lead_status(lead_id, status, notes)
    return RedirectResponse("/", status_code=303)

if __name__ == "__main__":
    uvicorn.run("dashboard.app:app", host="0.0.0.0", port=DASHBOARD_PORT, reload=True)
```

---

## dashboard/templates/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lead Manager Dashboard</title>
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>
  <header>
    <h1>Lead Manager</h1>
    <p class="subtitle">Today's leads — {{ total }} found</p>
  </header>

  <div class="stats">
    <div class="stat hot">{{ hot|length }} Hot</div>
    <div class="stat warm">{{ warm|length }} Warm</div>
    <div class="stat cold">{{ cold|length }} Cold</div>
  </div>

  {% for section, leads, cls in [("🔥 Hot Leads", hot, "hot"), ("🟡 Warm Leads", warm, "warm"), ("🔵 Cold Leads", cold, "cold")] %}
  <section class="lead-section {{ cls }}">
    <h2>{{ section }}</h2>
    {% for lead in leads %}
    <div class="lead-card {{ lead.temperature }}">
      <div class="lead-header">
        <span class="biz-name">{{ lead.business_name }}</span>
        <span class="score">{{ lead.score }}/100</span>
      </div>
      <div class="lead-meta">
        <span>{{ lead.city }}</span> ·
        <span>{{ lead.industry }}</span> ·
        <span>{{ lead.phone }}</span>
      </div>
      {% if lead.outreach_message %}
      <div class="message-box">{{ lead.outreach_message }}</div>
      {% endif %}
      <form method="post" action="/update/{{ lead.id }}" class="action-form">
        <select name="status">
          <option value="new" {% if lead.status=='new' %}selected{% endif %}>New</option>
          <option value="contacted" {% if lead.status=='contacted' %}selected{% endif %}>Contacted</option>
          <option value="follow_up" {% if lead.status=='follow_up' %}selected{% endif %}>Follow up</option>
          <option value="closed" {% if lead.status=='closed' %}selected{% endif %}>Closed</option>
          <option value="rejected" {% if lead.status=='rejected' %}selected{% endif %}>Rejected</option>
        </select>
        <input type="text" name="notes" placeholder="Notes..." value="{{ lead.notes or '' }}">
        <button type="submit">Save</button>
      </form>
    </div>
    {% endfor %}
  </section>
  {% endfor %}
</body>
</html>
```

---

## dashboard/static/style.css

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #f5f5f5; color: #1a1a1a; padding: 24px; }
header { margin-bottom: 24px; }
h1 { font-size: 28px; font-weight: 600; }
.subtitle { color: #666; margin-top: 4px; }
.stats { display: flex; gap: 16px; margin-bottom: 32px; }
.stat { padding: 16px 28px; border-radius: 10px; font-weight: 600; font-size: 18px; }
.stat.hot  { background: #fff0ee; color: #c0392b; }
.stat.warm { background: #fff8e1; color: #b7791f; }
.stat.cold { background: #e8f4fd; color: #1a5276; }
.lead-section { margin-bottom: 40px; }
.lead-section h2 { font-size: 18px; margin-bottom: 16px; }
.lead-card { background: white; border-radius: 10px; padding: 18px; margin-bottom: 12px; border-left: 4px solid #ddd; }
.lead-card.hot  { border-left-color: #e74c3c; }
.lead-card.warm { border-left-color: #f39c12; }
.lead-card.cold { border-left-color: #3498db; }
.lead-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.biz-name { font-weight: 600; font-size: 16px; }
.score { background: #f0f0f0; padding: 2px 10px; border-radius: 20px; font-size: 13px; }
.lead-meta { font-size: 13px; color: #666; margin-bottom: 10px; }
.message-box { background: #f9f9f9; border-left: 3px solid #aaa; padding: 10px 14px; font-size: 13px; border-radius: 4px; margin-bottom: 12px; line-height: 1.5; }
.action-form { display: flex; gap: 8px; flex-wrap: wrap; }
.action-form select, .action-form input { padding: 6px 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 13px; }
.action-form input { flex: 1; min-width: 160px; }
.action-form button { padding: 6px 16px; background: #1a1a1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; }
```

---

## How to extend this agent

### Add a new data source
1. Create `tools/new_source.py` with a `scrape_all() -> list[dict]` function
2. Import and call it inside `agents/scraper_agent.py`

### Add a new city
Add the city name to `TARGET_CITIES` in `config.py`. No other changes needed.

### Change how leads are scored
Edit the `SCORE_PROMPT` in `agents/scorer_agent.py`. The LLM does the scoring — just update the criteria in natural language.

### Change outreach message style
Edit `WRITE_PROMPT` in `agents/writer_agent.py`. You can switch to pure Urdu, pure English, or a different tone entirely.

### Run manually anytime
```bash
python main.py
```

### View historical leads (not just today)
Modify `get_todays_leads()` in `memory/lead_db.py` — remove the `DATE(created_at) = :today` filter.

---

## Important notes for Claude Code

- Always activate the virtual environment before running any Python command
- The `.env` file must exist with a valid `ANTHROPIC_API_KEY` before anything works
- Google Maps API has quota limits — `TARGET_INDUSTRIES[:5]` limits daily requests; adjust as needed
- Phone deduplication is enforced at the database level via UNIQUE constraint on `phone`
- The dashboard runs on `http://localhost:8000` — open this in your browser each morning
- All LLM calls use `claude-sonnet-4-20250514` — do not downgrade to Haiku for scoring as quality drops significantly
- The scraper uses real Google Maps API — Playwright scraping of Facebook is a fallback only when API access is unavailable
