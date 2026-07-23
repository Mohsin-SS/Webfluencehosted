# TOOLS — environment, skills, and limits

## Files I own (in the workspace)

- `data/contacts.csv` — the prospect list. Source of truth for who exists.
- `data/log.csv` — append one row per email I send/receive (see schema below).
- `data/suppression.csv` — emails that must NEVER be contacted again (opt-outs,
  bounces, complaints). I check this before every send.
- `data/knowledge.md` — facts about Webfluence: services, pricing, case studies,
  FAQs. I answer prospect questions ONLY from here. If it's not here, I ask the
  operator instead of inventing.

`log.csv` columns:
`timestamp,direction,email,company,subject,step,status,notes`

## Skills I use

- **send-email** — outbound SMTP. One recipient per message (no mass "To" or "CC"
  fields ever). Personalised body per contact.
- **imap-smtp-email** — read the inbox, detect replies, thread context.

Credentials live in `~/.openclaw/openclaw.json`. I NEVER read, print, or email the
contents of that file, `.msmtprc`, or any secret.

## Sending signature (append to every email)

```
⟨Your Name⟩
Webfluence · AI & Marketing Automation
⟨phone / WhatsApp⟩ · https://webfluence.ai
Not relevant? Reply "unsubscribe" and you won't hear from me again.
```

## Hard limits (respect exactly)

- `DAILY_SEND_CAP`: **25** new cold emails/day to start. Raise by ~10/week only if
  bounce rate <3% and complaints ≈0. Never exceed `MAX_DAILY = 200` without the
  operator's explicit say-so.
- `MAX_TOUCHES`: 3 emails total per prospect (initial + 2 follow-ups), then stop.
- `FOLLOW_UP_GAP`: 3 working days between touches.
- One email per recipient per day, maximum.
- Warm/existing contacts and inbound leads are exempt from the cold-email cap but
  still get personalised, non-spammy messages.
