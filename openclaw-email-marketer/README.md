# Webfluence — OpenClaw Email Marketer

An always-on, personalised AI email marketer for **Webfluence**, running on your
Contabo VPS using the free OpenClaw add-on. This package contains everything you
drop onto the server: the agent's workspace (its brain/persona), a config
template, a contacts template, and a compliance guide.

> **Read this first — an honest expectation-set.** OpenClaw can genuinely do most
> of the *labour* of an email marketer: research prospects, write personalised
> emails in your voice, run multi-step sequences, watch the inbox, reply to
> interested leads, book calls, and report to you every morning. What it should
> **not** do on day one is send unlimited cold email fully unsupervised — that is
> how domains get blacklisted and how you break spam/data laws. The setup below
> starts in **Approve-before-send** mode (the agent drafts, you tap approve on
> WhatsApp/Telegram) and graduates to autonomy once you trust it. Think of it as
> *replacing the busywork of your email team, with you as the editor-in-chief* —
> not firing your judgement.

---

## What OpenClaw actually is

OpenClaw is a free, open-source **self-hosted AI agent**. Unlike a chatbot, it
*takes actions*: it reads/writes files, runs commands, browses the web, and calls
skills like sending email over SMTP or reading an inbox over IMAP. Contabo offers
it as a **1-click add-on** for VPS/VDS — you pick the OpenClaw image at
provisioning and the server boots with it pre-installed.

Two things define your agent:

1. **`~/.openclaw/openclaw.json`** — the machine config: your LLM API key and each
   skill's settings/credentials (e.g. SMTP host + password for sending email).
2. **The workspace** — a folder of Markdown files injected into the agent's system
   prompt on every turn. This is *who the agent is and what it does*. All of the
   `workspace/*.md` files in this package go here.

---

## The 30-minute setup

### Step 0 — Provision the VPS with OpenClaw

1. In the Contabo panel, create (or reinstall) your VPS and select the
   **OpenClaw** 1-click image/add-on.
2. Once it boots, SSH in: `ssh root@YOUR_VPS_IP`.
3. Confirm it's alive: `openclaw --version` (and `openclaw status` if available).

### Step 1 — Give it a brain (LLM API key)

Get an **Anthropic API key** from https://console.anthropic.com (recommended — the
persona files are tuned for Claude, the strongest writer for this job). Open
`~/.openclaw/openclaw.json` and set your key and default model. Use
`openclaw.json.example` in this folder as the template. Recommended model:
`claude-opus-4-8` for writing quality, or `claude-sonnet-5` to cut cost.

### Step 2 — Give it an outbox and an inbox (email skills)

The agent sends with the **send-email** skill and reads replies with the
**imap-smtp-email** skill. **Do not send marketing mail from your main
`webfluence.ai@gmail.com` mailbox** — one spam complaint can hurt your primary
account. Instead:

- Buy/point a **separate sending domain or subdomain** (e.g. `mail.webfluence.ai`
  or a lookalike like `getwebfluence.com`) and use a proper email provider
  (Google Workspace, Zoho Mail, Amazon SES, Postmark, or Brevo).
- Create an app password / SMTP credential for that mailbox.
- Set up **SPF, DKIM, and DMARC** DNS records for that domain (your provider gives
  you the exact records). This is non-negotiable for deliverability.

Then fill the SMTP/IMAP blocks in `openclaw.json.example` and copy it to
`~/.openclaw/openclaw.json`.

### Step 3 — Install the persona (the workspace)

Copy every file from this package's `workspace/` folder into the agent's workspace
directory on the VPS (typically `~/.openclaw/workspace/` — confirm the path with
`openclaw config` or the docs). These files are already written **for Webfluence**:

| File          | What it controls |
|---------------|------------------|
| `IDENTITY.md` | The agent's name + emoji |
| `SOUL.md`     | Voice, tone, values — *how it writes* |
| `AGENTS.md`   | The job: goals, the outreach playbook, hard rules, the send workflow |
| `USER.md`     | Who **you** are and how you want to be contacted |
| `TOOLS.md`    | Where files live, which skills to use, sending limits |
| `HEARTBEAT.md`| The daily/scheduled autonomous routine — **this is what makes it "always running"** |
| `MEMORY.md`   | Iron laws it must never break (compliance + safety) |

Edit the `⟨FILL THIS IN⟩` placeholders (your offer, your calendar link, your
signature, daily send cap). Twenty minutes here is what makes it *personalised*
instead of generic.

### Step 4 — Load your prospects

Put your lead list at `~/.openclaw/workspace/data/contacts.csv` using the columns
in `contacts.example.csv`. The agent reads this file, tracks who it has contacted,
and never double-sends. Start with **20–50 warm/relevant contacts**, not 5,000.

### Step 5 — Connect a control channel (so it can reach you)

Connect WhatsApp or Telegram (per OpenClaw docs) so the agent can send you drafts
for approval and daily reports, and you can command it in plain language
("pause sending", "draft 10 for real-estate leads", "who replied today?").

### Step 6 — Make it always-on

The heartbeat only fires while the OpenClaw process is running, so keep it up
across reboots. If Contabo's image already runs it as a service, you're done.
Otherwise enable the service (`systemctl enable --now openclaw`) or run it under a
supervisor. See `COMPLIANCE.md` and the "Keeping it alive" note below.

### Step 7 — Go live in safe mode

In `AGENTS.md`, `SENDING_MODE` is set to **`approve`** by default: the agent
drafts and pings you; nothing leaves without your OK. Run like this for a week,
correct its drafts (it learns from your edits via `MEMORY.md`), and only then flip
to `SENDING_MODE: auto` with a conservative daily cap.

---

## How "always running" works (the heartbeat)

OpenClaw wakes itself on a schedule defined in `HEARTBEAT.md`. Our routine does,
every working day:

- **08:30** — Plan the day: pick today's segment, research 10–15 prospects, draft
  personalised emails, send you the batch for approval (or auto-send if enabled).
- **Hourly, 09:00–18:00** — Check the inbox: reply to interested leads, answer
  questions from your knowledge base, propose meeting times, flag anything that
  needs a human.
- **13:00** — Send the next step of active sequences (follow-ups) to non-repliers,
  respecting the max-touches rule.
- **18:00** — Daily report to you: sent / opened / replied / booked, and tomorrow's
  plan.

You change cadence and volume by editing `HEARTBEAT.md` and `TOOLS.md` — no code.

## Keeping it alive across reboots

If OpenClaw isn't already a managed service on the Contabo image, the simplest
robust option is a systemd unit. A ready-to-adapt example is in
`COMPLIANCE.md → Operations`. The key point: if the process dies, the heartbeat
stops, so supervise it and check `openclaw status` in your morning report.

---

## What to read next

- **`COMPLIANCE.md`** — deliverability (SPF/DKIM/DMARC, warm-up, volume ramp) and
  the law (Pakistan PECA, plus CAN-SPAM/GDPR/CASL for international prospects).
  **Do not skip this** — it's the difference between a marketing asset and a
  blacklisted domain.
- **`workspace/AGENTS.md`** — the actual playbook; tune it to your offer.

## Sources

- [What is OpenClaw — Contabo Help](https://help.contabo.com/en/support/solutions/articles/103000390037-what-is-openclaw-and-how-do-i-use-it-on-contabo-)
- [OpenClaw Explained — KDnuggets](https://www.kdnuggets.com/openclaw-explained-the-free-ai-agent-tool-going-viral-already-in-2026)
- [OpenClaw Use Cases for Business — Contabo Blog](https://contabo.com/blog/openclaw-use-cases-for-business-in-2026/)
- [OpenClaw Security Guide 2026 — Contabo Blog](https://contabo.com/blog/openclaw-security-guide-2026/)
- [OpenClaw Email Setup Guide](https://openclawdatabase.com/openclaw/email/)
- [OpenClaw Workspace Files Explained](https://clawpane.co/blog/openclaw-workspace-files-guide)
