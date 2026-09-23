import { db, doc, updateDoc, serverTimestamp } from "./firebase-init.js";
import { computeLevel } from "./email-notify.js";
import { DAY_NAMES } from "./quiz.js";
import { MAILER_URL, MAILER_SECRET, MARKING_EMAIL_TO } from "../firebase-config.js";
import { sendMail } from "./mailer.js";

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
  const dayLines = [1, 2, 3, 4, 5].map((d) => {
    const r = profile.perDay[d];
    totalScore += r.score;
    totalMax += r.maxScore;
    return `Day ${d} — ${DAY_NAMES[d]}: ${r.score} / ${r.maxScore} (${r.percent.toFixed(0)}%) — ${r.level}`;
  });
  const overallLevel = computeLevel(totalScore, totalMax);
  const overallPercent = totalMax > 0 ? (totalScore / totalMax) * 100 : 0;

  const subject = `[SQL Account] ${profile.name} — Completion report (all 5 days passed)`;
  const body = [
    `Candidate: ${profile.name} <${profile.email}>`,
    "",
    ...dayLines,
    "",
    `Overall: ${totalScore} / ${totalMax} (${overallPercent.toFixed(1)}%) — ${overallLevel}`,
    `Ready to start work: YES`,
    `Completed: ${new Date().toLocaleString()}`,
  ].join("\n");

  await sendMail(MAILER_URL, MAILER_SECRET, { to: MARKING_EMAIL_TO, subject, body });

  await updateDoc(doc(db, "candidate_profiles", profile.email), {
    reportSentAt: serverTimestamp(),
  });
}
