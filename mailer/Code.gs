// Deployed as a Google Apps Script Web App, this is the ONE piece of
// "backend" this whole project has — everything else is a static site.
// It exists so candidate/admin browsers can send email without any
// third-party email vendor: it just relays a {to, subject, body} POST
// into GmailApp.sendEmail(), using your own Gmail account's free send
// quota. See README.md in this folder for how to deploy it.
//
// Two safety checks keep this from becoming an open spam relay if the
// URL ever leaks:
//   1. A shared secret ("key") the caller must send, checked below.
//   2. "to" is restricted to a fixed allow-list — this endpoint was never
//      meant to email arbitrary addresses, only your own admin inbox(es).
// Both are read from Script Properties (Project Settings > Script
// Properties in the Apps Script editor), not hardcoded here, so this file
// is safe to keep in a public repo.

function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var secret = props.getProperty("SHARED_SECRET");
    var allowedTo = (props.getProperty("ALLOWED_TO") || "")
      .split(",")
      .map(function (s) { return s.trim().toLowerCase(); })
      .filter(Boolean);

    var data = JSON.parse(e.postData.contents);

    if (!secret || data.key !== secret) {
      return json({ ok: false, error: "Unauthorized" });
    }

    var to = String(data.to || "").trim();
    var subject = String(data.subject || "").trim();
    var body = String(data.body || "").trim();
    var html = String(data.html || "").trim();

    if (!to || !subject || !body) {
      return json({ ok: false, error: "Missing to/subject/body" });
    }
    if (allowedTo.length > 0 && allowedTo.indexOf(to.toLowerCase()) === -1) {
      return json({ ok: false, error: "Recipient not allowed" });
    }

    // "body" is always sent as the plain-text part (accessibility + clients
    // that don't render HTML); "html", if provided, is layered on top as the
    // styled version most inboxes actually display.
    var options = html ? { htmlBody: html } : {};
    GmailApp.sendEmail(to, subject, body, options);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
