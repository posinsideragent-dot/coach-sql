# mailer — free, no-vendor email sending

This replaces EmailJS across all of coach-sql's products (SQL Account and
SQL Payroll, both candidate-facing marking emails and the admin-triggered
completion report). Instead of a third-party email vendor, it's a tiny
Google Apps Script Web App that sends through **your own Gmail account** —
free within Gmail's normal daily send quota (500/day on a personal Gmail
account, 1500/day on Google Workspace), and the only party involved is
Google, which this project already trusts for Firebase.

You only need to deploy this **once** — every product (Account/Payroll,
candidate/admin) points at the same deployed URL.

## 1. Create the Apps Script project

1. Go to [script.google.com](https://script.google.com) → **New project**.
2. Delete the default `Code.gs` contents and paste in this folder's
   `Code.gs` instead.
3. Rename the project (top-left, e.g. "coach-sql mailer") — cosmetic only.

## 2. Set the two secrets it needs

In the Apps Script editor: **Project Settings** (gear icon, left sidebar) →
scroll to **Script Properties** → **Add script property**, twice:

| Property | Value |
|---|---|
| `SHARED_SECRET` | Any long random string you make up — this is the "password" every product's `firebase-config.js` needs to match to be allowed to send. Treat it like the EmailJS public key it replaces: not truly secret, but not worth publishing either. |
| `ALLOWED_TO` | The admin inbox(es) allowed to receive mail through this endpoint, comma-separated if more than one (e.g. `posinsideragent@gmail.com`). This is what keeps the endpoint from being usable as an open spam relay even if the URL and secret both leak — it can only ever email you. |

## 3. Deploy as a Web App

1. Top-right **Deploy** → **New deployment**.
2. Click the gear next to "Select type" → **Web app**.
3. Settings:
   - **Execute as**: Me (your Google account — this is whose Gmail sends the mail)
   - **Who has access**: Anyone
     (This has to be "Anyone" because candidates have no login — same
     trust model as EmailJS's public key. The `SHARED_SECRET` +
     `ALLOWED_TO` checks above are what actually gate it.)
4. Click **Deploy**. The first time, Google will ask you to authorize the
   script's Gmail access — click through the "unverified app" warning
   (it's unverified because it's your own private script, not published).
5. Copy the **Web app URL** it gives you — looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 4. Wire it into each product

In every product's `firebase-config.js` (`coach-sql`, `coach-sql-admin`,
`coach-sql-payroll-repo/candidate`, `coach-sql-payroll-repo/admin`), set:

```js
export const MAILER_URL = "https://script.google.com/macros/s/XXXXXXXX/exec";
export const MAILER_SECRET = "the-SHARED_SECRET-you-set-above";
export const MARKING_EMAIL_TO = "posinsideragent@gmail.com"; // must be in ALLOWED_TO
```

## 5. Redeploying after an edit

If you ever edit `Code.gs` again, you must **Deploy → Manage deployments →
edit (pencil) → New version → Deploy** — just saving the file does not
update the live Web App URL's behavior.

## Limits worth knowing

- Gmail's send quota (500/day personal, 1500/day Workspace) resets daily.
  This app sends at most 2 emails per candidate attempt (marking sheet +
  eventual completion report), so this should never come close in normal
  onboarding volume.
- If you ever need a real, non-Gmail "from" address or attachments beyond
  what `GmailApp.sendEmail` supports, this is the file to extend.
