import { db, collection, onSnapshot } from "./firebase-init.js";
import { ADMIN_PIN } from "../firebase-config.js";
import { sendCompletionReport } from "./completion-report.js";

let candidates = {}; // id -> data
let profiles = {}; // email -> candidate_profiles data

function fmtTime(ts) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString();
}

function renderTable() {
  const tbody = document.getElementById("candidates-body");
  tbody.innerHTML = "";
  const rows = Object.entries(candidates).sort((a, b) => {
    const ta = a[1].startedAt?.toMillis ? a[1].startedAt.toMillis() : 0;
    const tb = b[1].startedAt?.toMillis ? b[1].startedAt.toMillis() : 0;
    return tb - ta;
  });

  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="muted">No attempts yet.</td></tr>`;
    return;
  }

  rows.forEach(([id, c]) => {
    const tr = document.createElement("tr");
    const flagCount = (c.flags || []).length;
    const scoreText = c.status === "completed" ? `${c.score} / ${c.maxScore}` : "—";
    const progressText = c.status === "completed" ? "Done" : `Q${(c.currentIndex ?? 0) + 1} / ${c.totalQuestions ?? "?"}`;
    tr.innerHTML = `
      <td><span class="status-dot ${c.status}"></span>${c.status}</td>
      <td>${c.name || "(no name)"}</td>
      <td>${progressText}</td>
      <td>${scoreText}</td>
      <td>${flagCount > 0 ? `<span class="flag-pill">${flagCount} flag${flagCount === 1 ? "" : "s"}</span>` : "—"}</td>
      <td>${fmtTime(c.startedAt)}</td>
    `;
    tr.style.cursor = "pointer";
    tr.addEventListener("click", () => openDetail(id));
    tbody.appendChild(tr);
  });
}

function renderCompletions() {
  const tbody = document.getElementById("completions-body");
  const rows = Object.entries(profiles)
    .filter(([, p]) => p.allPassed)
    .sort((a, b) => (a[1].name || "").localeCompare(b[1].name || ""));

  tbody.innerHTML = "";
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="muted">No candidates have passed all 5 days yet.</td></tr>`;
    return;
  }

  rows.forEach(([email, p]) => {
    let totalScore = 0;
    let totalMax = 0;
    [1, 2, 3, 4, 5].forEach((d) => {
      const r = p.perDay?.[d];
      if (r) { totalScore += r.score; totalMax += r.maxScore; }
    });
    const overallPercent = totalMax > 0 ? ((totalScore / totalMax) * 100).toFixed(1) : "—";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name || "(no name)"}</td>
      <td>${email}</td>
      <td>${totalScore} / ${totalMax} (${overallPercent}%)</td>
      <td class="report-cell"></td>
    `;
    const cell = tr.querySelector(".report-cell");
    if (p.reportSentAt) {
      cell.textContent = `Sent ${fmtTime(p.reportSentAt)}`;
    } else {
      const btn = document.createElement("button");
      btn.className = "secondary";
      btn.textContent = "Send completion report";
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        btn.textContent = "Sending…";
        try {
          await sendCompletionReport(p);
          btn.textContent = "Sent";
        } catch (e) {
          console.error("completion report failed", e);
          btn.disabled = false;
          btn.textContent = "Send completion report";
          alert(`Failed to send: ${e.message}`);
        }
      });
      cell.appendChild(btn);
    }
    tbody.appendChild(tr);
  });
}

function openDetail(id) {
  const c = candidates[id];
  const modal = document.getElementById("detail-modal");
  const body = document.getElementById("detail-body");

  let dayRows = "";
  if (c.scoreByDay) {
    Object.entries(c.scoreByDay).forEach(([day, s]) => {
      dayRows += `<div class="score-row"><span>Day ${day} — ${s.topic}</span><span>${s.correct} / ${s.total}</span></div>`;
    });
  }

  let flagsHtml = "";
  (c.flags || []).forEach((f) => {
    flagsHtml += `<div class="flag-pill" style="display:block;margin-bottom:4px;">${new Date(f.at).toLocaleTimeString()} — ${f.detail}</div>`;
  });
  if (!flagsHtml) flagsHtml = `<p class="muted">No flags recorded.</p>`;

  let answersHtml = "";
  (c.answers || []).forEach((a, i) => {
    answersHtml += `
      <div style="margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid #eee;">
        <div style="font-weight:600; margin-bottom:4px;">${i + 1}. ${a.question}</div>
        <div style="font-size:14px;">
          Answered: <b style="color:${a.isCorrect ? "#1b7f1b" : "#b00020"}">${a.selectedLetter ?? "(blank)"}</b>
          &nbsp;·&nbsp; Correct: <b>${a.correctLetter}</b>
        </div>
      </div>`;
  });

  body.innerHTML = `
    <h2>${c.name || "(no name)"}</h2>
    <p class="muted">Started ${fmtTime(c.startedAt)} · ${c.status === "completed" ? "Completed " + fmtTime(c.completedAt) : "In progress"}</p>
    ${c.status === "completed" ? `<div class="score-big">${c.score} / ${c.maxScore}</div>` : ""}
    <h2 style="margin-top:20px;">Score by day</h2>
    ${dayRows || '<p class="muted">Not completed yet.</p>'}
    <h2 style="margin-top:20px;">Proctoring flags</h2>
    ${flagsHtml}
    <h2 style="margin-top:20px;">Answer review</h2>
    ${answersHtml || '<p class="muted">Not completed yet.</p>'}
  `;
  modal.style.display = "flex";
}

document.getElementById("detail-close").addEventListener("click", () => {
  document.getElementById("detail-modal").style.display = "none";
});
document.getElementById("detail-modal").addEventListener("click", (e) => {
  if (e.target.id === "detail-modal") document.getElementById("detail-modal").style.display = "none";
});

function startLiveListener() {
  onSnapshot(collection(db, "candidates"), (snap) => {
    candidates = {};
    snap.forEach((d) => { candidates[d.id] = d.data(); });
    renderTable();
  });
  onSnapshot(collection(db, "candidate_profiles"), (snap) => {
    profiles = {};
    snap.forEach((d) => { profiles[d.id] = d.data(); });
    renderCompletions();
  });
}

document.getElementById("pin-submit").addEventListener("click", () => {
  const val = document.getElementById("pin-input").value.trim();
  if (val === ADMIN_PIN) {
    document.getElementById("pin-gate").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    startLiveListener();
  } else {
    document.getElementById("pin-error").textContent = "Wrong PIN.";
  }
});
document.getElementById("pin-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("pin-submit").click();
});
