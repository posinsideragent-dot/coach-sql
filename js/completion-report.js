import { db, doc, updateDoc, serverTimestamp } from "./firebase-init.js";
import { computeLevel } from "./email-notify.js";
import { DAY_NAMES } from "./quiz.js";
import {
  EMAILJS_SERVICE_ID, EMAILJS_COMPLETION_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, MARKING_EMAIL_TO,
} from "../firebase-config.js";

let initialized = false;
function ensureInit() {
  if (initialized) return;
  if (window.emailjs && typeof window.emailjs.init === "function") {
    window.emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
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

  ensureInit();
  if (!window.emailjs) {
    throw new Error("EmailJS SDK not loaded — see vendor/emailjs/README.md.");
  }
  if (!EMAILJS_COMPLETION_TEMPLATE_ID) {
    throw new Error("EMAILJS_COMPLETION_TEMPLATE_ID is not set in firebase-config.js.");
  }

  let totalScore = 0;
  let totalMax = 0;
  const dayFields = {};
  [1, 2, 3, 4, 5].forEach((d) => {
    const r = profile.perDay[d];
    totalScore += r.score;
    totalMax += r.maxScore;
    dayFields[`day${d}_topic`] = DAY_NAMES[d];
    dayFields[`day${d}_score`] = `${r.score} / ${r.maxScore} (${r.percent.toFixed(0)}%)`;
    dayFields[`day${d}_level`] = r.level;
  });
  const overallLevel = computeLevel(totalScore, totalMax);
  const overallPercent = totalMax > 0 ? (totalScore / totalMax) * 100 : 0;

  await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_COMPLETION_TEMPLATE_ID, {
    to_email: MARKING_EMAIL_TO,
    candidate_name: profile.name,
    candidate_email: profile.email,
    ...dayFields,
    overall_score: `${totalScore} / ${totalMax} (${overallPercent.toFixed(1)}%)`,
    overall_level: overallLevel,
    ready_to_work: "YES",
    completed_at: new Date().toLocaleString(),
  });

  await updateDoc(doc(db, "candidate_profiles", profile.email), {
    reportSentAt: serverTimestamp(),
  });
}
