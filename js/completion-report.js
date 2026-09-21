import { db, doc, updateDoc, serverTimestamp } from "./firebase-init.js";
import { computeLevel } from "./email-notify.js";
import { DAY_NAMES } from "./quiz.js";
import {
  EMAILJS_SERVICE_ID, EMAILJS_COMPLETION_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, MARKING_EMAIL_TO,
} from "../firebase-config.js";

// Called after every attempt is recorded. Only actually sends anything once
// a candidate has passed all 5 days and no report has been sent yet — never
// throws, since a failure here must not affect the candidate's own flow.
// No PDF/file hosting involved (that would require Firebase's paid Blaze
// plan) — the full report goes directly in the email body as plain fields.
export async function maybeSendCompletionReport(profile) {
  if (!profile || !profile.allPassed || profile.reportSentAt) return;
  try {
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

    await updateDoc(doc(db, "candidate_profiles", profile.email), {
      reportSentAt: serverTimestamp(),
    });

    if (window.emailjs) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
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
    } else {
      console.warn("EmailJS SDK not loaded — completion report not sent.");
    }
  } catch (e) {
    console.error("completion report failed", e);
  }
}
