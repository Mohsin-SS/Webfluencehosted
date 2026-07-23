# Deliverability, Law & Operations

Read this before you send a single email. An autonomous sender that ignores this
gets your domain blacklisted within days. None of the following is optional.

## 1. Deliverability — get into the inbox, not spam

**Never send from `webfluence.ai@gmail.com` or your main domain.** Use a dedicated
sending domain/subdomain (e.g. `mail.webfluence.ai`). If it ever gets burned, your
primary email is untouched.

**Authenticate the domain (mandatory):**
- **SPF** — DNS TXT authorising your sending provider.
- **DKIM** — cryptographic signature; your provider gives you the record.
- **DMARC** — start `p=none` for monitoring, tighten to `p=quarantine` later.
Your email provider (Zoho, Google Workspace, Amazon SES, Postmark, Brevo) provides
the exact records. Verify with a tool like mail-tester.com — aim for 9–10/10.

**Warm up the domain.** A brand-new domain blasting 100 cold emails looks like
spam. Ramp: ~10–15/day week 1, +10/day each week if bounces <3% and complaints ≈0.
The caps in `workspace/TOOLS.md` already encode a safe start.

**Content hygiene** (already baked into `SOUL.md`): plain-text feel, no image-only
emails, no link shorteners, no spam-trigger words, real opt-out, one CTA.

**List hygiene:** validate addresses before sending, remove hard bounces
immediately (the agent moves them to `suppression.csv`), never email purchased or
scraped-blind lists.

## 2. The law — don't get fined or sued

You email people in multiple jurisdictions; comply with the strictest that applies.

- **Pakistan (PECA 2016 & data-protection rules):** don't send deceptive or
  harassing electronic communication; honour opt-outs; identify yourself truthfully.
- **USA (CAN-SPAM):** accurate From/subject, a physical postal address in the
  email, a working unsubscribe honoured within 10 days. Opt-out cold email is legal
  if these are met.
- **EU/UK (GDPR / PECR):** stricter — B2B cold email needs a lawful basis
  (legitimate interest) and easy opt-out; B2C generally needs prior consent. Keep
  records of why each contact is on your list.
- **Canada (CASL):** among the strictest — consent-oriented, real penalties.

Practical rules the agent already follows: truthful sender & subject, one-click/
reply opt-out honoured instantly and forever, only contacts with a genuine business
reason to hear from you, and a real business identity + address in the footer.
**Add your physical business address** to the signature in `TOOLS.md` if you email
US/EU prospects.

> This is operational guidance, not legal advice. For large-scale international
> sending, have a lawyer confirm your process.

## 3. Operations — keep it alive & watch it

**Run OpenClaw as a service** so the heartbeat survives reboots. If the Contabo
image doesn't already, a systemd unit is the simplest robust option — adapt paths
to your install:

```ini
# /etc/systemd/system/openclaw.service
[Unit]
Description=OpenClaw AI Agent (Webfluence Email Marketer)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/.openclaw
ExecStart=/usr/local/bin/openclaw run           # confirm the real run command
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl enable --now openclaw
systemctl status openclaw        # confirm it's active
journalctl -u openclaw -f        # live logs
```

**Security (see Contabo's OpenClaw Security Guide):** the agent can run shell
commands and read files, so treat the VPS as sensitive. Use SSH keys not passwords,
enable a firewall, keep secrets only in `openclaw.json` (chmod 600), take regular
snapshots, and review the daily report. Never expose the OpenClaw control interface
to the open internet without authentication.

**Backups:** snapshot the VPS, and keep `workspace/data/*.csv` backed up — that's
your contact history and suppression list.

**The weekly human check:** read the evening reports; skim what it actually sent;
correct tone in `MEMORY.md`. The agent replaces the *labour*, not your oversight.

## Sources
- [OpenClaw Security Guide 2026 — Contabo](https://contabo.com/blog/openclaw-security-guide-2026/)
- [OpenClaw Email Setup Guide](https://openclawdatabase.com/openclaw/email/)
