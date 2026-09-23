import { db, doc, updateDoc, serverTimestamp } from "./firebase-init.js";
import { computeLevel } from "./email-notify.js";
import { DAY_NAMES } from "./quiz.js";
import { MAILER_URL, MAILER_SECRET, MARKING_EMAIL_TO } from "../firebase-config.js";
import { sendMail } from "./mailer.js";

const LEVEL_COLORS = {
  Advanced: { bg: "#e6f4ea", fg: "#1b7f1b" },
  Intermediate: { bg: "#e8f0fe", fg: "#1a56db" },
  Junior: { bg: "#fff4e5", fg: "#b26a00" },
  Beginner: { bg: "#fdecea", fg: "#b00020" },
};
function levelBadge(level) {
  const c = LEVEL_COLORS[level] || LEVEL_COLORS.Beginner;
  return `<span style="background:${c.bg};color:${c.fg};font-size:12px;font-weight:700;padding:4px 10px;border-radius:20px;">${level}</span>`;
}

// Triggered by an admin from the dashboard (not automatically) once a
// candidate has passed all 5 days. Guards against double-sending via
// reportSentAt, and only marks it sent after the email actually succeeds —
// marking it beforehand would permanently block retrying after a failed
// send, since the guard is "skip if already sent". Throws on failure so the
// admin UI can show the error, unlike the candidate-facing emails which
// swallow errors.
export async function sendCompletionReport(profile) {
  if (!profile || !profile.allPassed) {
    throw new Error("Candidate has not passed all 5 days yet.");
  }
  if (profile.reportSentAt) {
    throw new Error("Completion report was already sent for this candidate.");
  }

  let totalScore = 0;
  let totalMax = 0;
  const dayLines = [];
  const dayRowsHtml = [];
  [1, 2, 3, 4, 5].forEach((d) => {
    const r = profile.perDay[d];
    totalScore += r.score;
    totalMax += r.maxScore;
    dayLines.push(`Day ${d} — ${DAY_NAMES[d]}: ${r.score} / ${r.maxScore} (${r.percent.toFixed(0)}%) — ${r.level}`);
    dayRowsHtml.push(`
      <tr>
        <td style="padding:6px 0;border-bottom:1px solid #f2f2f2;">Day ${d} — ${DAY_NAMES[d]}</td>
        <td style="padding:6px 0;border-bottom:1px solid #f2f2f2;text-align:right;">${r.score}/${r.maxScore} (${r.percent.toFixed(0)}%)</td>
        <td style="padding:6px 0;border-bottom:1px solid #f2f2f2;text-align:right;">${r.level}</td>
      </tr>
    `);
  });
  const overallLevel = computeLevel(totalScore, totalMax);
  const overallPercent = totalMax > 0 ? (totalScore / totalMax) * 100 : 0;
  const readyToWork = "YES";
  const completedAt = new Date().toLocaleString();
  const overallColor = (LEVEL_COLORS[overallLevel] || LEVEL_COLORS.Beginner).fg;

  const subject = `SQL Account — ${profile.name}: All 5 Days Complete`;

  const body = [
    `Candidate: ${profile.name} <${profile.email}>`,
    "",
    ...dayLines,
    "",
    `Overall: ${totalScore} / ${totalMax} (${overallPercent.toFixed(1)}%) — ${overallLevel}`,
    `Ready to start work: ${readyToWork}`,
    `Completed: ${completedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;">
      <div style="background:#1b7f1b;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0;">
        <div style="font-size:12px;letter-spacing:0.5px;opacity:0.85;text-transform:uppercase;">SQL Account &middot; Onboarding</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px;">&#127881; All 5 Days Complete</div>
      </div>
      <div style="border:1px solid #e0e2e6;border-top:none;border-radius:0 0 8px 8px;padding:20px;">
        <div style="font-size:16px;font-weight:600;color:#222;">${profile.name}</div>
        <div style="color:#666;font-size:13px;margin-bottom:16px;">${profile.email}</div>
        <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px;">
          <tr style="color:#888;text-align:left;">
            <th style="padding:6px 0;border-bottom:1px solid #e0e2e6;">Day</th>
            <th style="padding:6px 0;border-bottom:1px solid #e0e2e6;text-align:right;">Score</th>
            <th style="padding:6px 0;border-bottom:1px solid #e0e2e6;text-align:right;">Level</th>
          </tr>
          ${dayRowsHtml.join("")}
        </table>
        <table cellpadding="0" cellspacing="0" style="margin-bottom:14px;"><tr>
          <td style="font-size:28px;font-weight:800;color:${overallColor};padding-right:10px;">${totalScore}/${totalMax}</td>
          <td>${levelBadge(overallLevel)}</td>
        </tr></table>
        <div style="font-size:13px;color:#444;">Ready to start work: <b style="color:#1b7f1b;">${readyToWork}</b></div>
        <div style="margin-top:4px;font-size:12px;color:#888;">Completed ${completedAt}</div>
      </div>
    </div>
  `;

  await sendMail(MAILER_URL, MAILER_SECRET, { to: MARKING_EMAIL_TO, subject, body, html });

  await updateDoc(doc(db, "candidate_profiles", profile.email), {
    reportSentAt: serverTimestamp(),
  });
}
