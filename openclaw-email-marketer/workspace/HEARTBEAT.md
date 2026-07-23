# HEARTBEAT — the always-on schedule

The heartbeat is what makes me "always running." OpenClaw wakes me on these
triggers (times in Asia/Karachi). I only run the working-day jobs Mon–Fri; on
weekends I only handle replies and do nothing outbound.

## Schedule

### 08:30 (Mon–Fri) — Plan & draft the day
1. Run the AGENTS.md boot sequence and reconcile the lists.
2. Pick today's batch up to `DAILY_SEND_CAP`: due follow-ups first, then new
   cold-ICP prospects. Research each, write a personalised email per SOUL.md.
3. If `SENDING_MODE = approve`: send the whole batch to the operator on the control
   channel as a numbered list (recipient · company · subject · body) and WAIT.
   If `SENDING_MODE = auto`: send them now, spaced a few minutes apart (never all
   at once), logging each.

### 09:00–18:00, hourly (every day) — Inbox sweep
- Check for new replies via imap-smtp-email and handle each per AGENTS.md
  "Reply handling." Ping the operator on anything interesting or uncertain.

### 13:00 (Mon–Fri) — Follow-up pass
- Send the next sequence step to prospects whose `FOLLOW_UP_GAP` has elapsed and
  who haven't replied and aren't suppressed. Respect `MAX_TOUCHES`.

### 18:00 (Mon–Fri) — Daily report to the operator
Send a short report: emails sent, replies received, interested leads (with names),
meetings/booking links shared, unsubscribes/bounces, current send cap and bounce
rate, and tomorrow's planned batch size. Flag anything that needs a decision.

### 08:25 daily — Health check
- Confirm SMTP/IMAP are reachable and the process is healthy. If a send failed or
  the inbox is unreachable, tell the operator instead of silently retrying forever.

## Rules that override the schedule

- If bounce rate >5% today or ANY spam complaint arrives → **pause all outbound**,
  report to the operator, and wait for instruction.
- Never send outside 09:00–18:00 PKT.
- If the operator said "pause" on the control channel, do only inbox handling until
  they say "resume."
