import {
  storage, ref, uploadBytes, getDownloadURL, doc, db, updateDoc, serverTimestamp,
} from "./firebase-init.js";
import { computeLevel } from "./email-notify.js";
import { DAY_NAMES } from "./quiz.js";
import {
  EMAILJS_SERVICE_ID, EMAILJS_COMPLETION_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, MARKING_EMAIL_TO,
} from "../firebase-config.js";

function buildPdfBlob(profile) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const marginX = 18;
  let y = 20;

  doc.setFontSize(18);
  doc.text("SQL Account Support — Onboarding Completion Report", marginX, y);
  y += 10;

  doc.setFontSize(11);
  doc.text(`Candidate: ${profile.name}`, marginX, y); y += 7;
  doc.text(`Email: ${profile.email}`, marginX, y); y += 7;
  doc.text(`Report generated: ${new Date().toLocaleString()}`, marginX, y); y += 12;

  doc.setFontSize(13);
  doc.text("Per-day results", marginX, y); y += 8;
  doc.setFontSize(10);

  let totalScore = 0;
  let totalMax = 0;
  [1, 2, 3, 4, 5].forEach((d) => {
    const r = profile.perDay[d];
    totalScore += r.score;
    totalMax += r.maxScore;
    doc.text(
      `Day ${d} — ${DAY_NAMES[d]}: ${r.score}/${r.maxScore} (${r.percent.toFixed(0)}%) — ${r.level} — ${r.passed ? "PASSED" : "NOT PASSED"} — ${r.attempts} attempt(s)`,
      marginX, y,
    );
    y += 7;
  });

  y += 6;
  const overallPercent = totalMax > 0 ? (totalScore / totalMax) * 100 : 0;
  const overallLevel = computeLevel(totalScore, totalMax);

  doc.setFontSize(13);
  doc.text("Overall", marginX, y); y += 8;
  doc.setFontSize(11);
  doc.text(`Combined score: ${totalScore} / ${totalMax} (${overallPercent.toFixed(1)}%)`, marginX, y); y += 7;
  doc.text(`Overall level: ${overallLevel}`, marginX, y); y += 7;
  doc.text("Passed all 5 onboarding days: YES", marginX, y); y += 7;
  doc.setFontSize(13);
  doc.text("Ready to start work: YES", marginX, y);

  return doc.output("blob");
}

// Called after every attempt is recorded. Only actually does anything once
// a candidate has passed all 5 days and no report has been sent yet — never
// throws, since a failure here must not affect the candidate's own flow.
export async function maybeSendCompletionReport(profile) {
  if (!profile || !profile.allPassed || profile.pdfSentAt) return;
  try {
    const blob = buildPdfBlob(profile);
    const fileRef = ref(storage, `completion-reports/${profile.email}-${Date.now()}.pdf`);
    await uploadBytes(fileRef, blob, { contentType: "application/pdf" });
    const url = await getDownloadURL(fileRef);

    await updateDoc(doc(db, "candidate_profiles", profile.email), {
      pdfUrl: url,
      pdfSentAt: serverTimestamp(),
    });

    if (window.emailjs) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_COMPLETION_TEMPLATE_ID, {
        to_email: MARKING_EMAIL_TO,
        candidate_name: profile.name,
        candidate_email: profile.email,
        pdf_url: url,
        completed_at: new Date().toLocaleString(),
      });
    } else {
      console.warn("EmailJS SDK not loaded — completion report uploaded but email not sent.");
    }
  } catch (e) {
    console.error("completion report failed", e);
  }
}
