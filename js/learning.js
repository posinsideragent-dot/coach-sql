import { DAY_NAMES } from "./quiz.js";
import { DEMO_STEPS } from "./demo-steps.js";
import { LEARNING_MODULE_MINUTES } from "../firebase-config.js";

let timerInterval = null;

export function renderDayPicker(container, onPick) {
  container.innerHTML = "";
  Object.keys(DAY_NAMES).sort((a, b) => a - b).forEach((day) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `Day ${day} — ${DAY_NAMES[day]}`;
    btn.addEventListener("click", () => onPick(Number(day)));
    container.appendChild(btn);
  });
}

// Flattens a day's demo into one ordered sequence of cards: an intro card
// (goal), one card per screenshot step (tagged with its lesson title), and
// a closing card (practice task) — so the candidate only ever sees one
// thing at a time instead of a long scrolling page.
function buildSequence(demo) {
  const sequence = [{ kind: "goal", text: demo.goal }];
  demo.lessons.forEach((lesson) => {
    lesson.steps.forEach((step) => {
      sequence.push({ kind: "step", lessonTitle: lesson.title, ...step });
    });
  });
  sequence.push({ kind: "practice", text: demo.practiceTask });
  return sequence;
}

function renderCard(container, card) {
  container.innerHTML = "";

  if (card.kind === "goal") {
    const p = document.createElement("p");
    p.className = "lesson-goal";
    p.innerHTML = `<strong>Goal:</strong> ${card.text}`;
    container.appendChild(p);
    return;
  }

  if (card.kind === "practice") {
    const p = document.createElement("p");
    p.className = "practice-task";
    p.innerHTML = `<strong>You'll practice:</strong> ${card.text}`;
    container.appendChild(p);
    return;
  }

  const title = document.createElement("div");
  title.className = "lesson-title";
  title.textContent = card.lessonTitle;
  container.appendChild(title);

  const stepEl = document.createElement("div");
  stepEl.className = "demo-step";
  if (card.image) {
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.caption || card.lessonTitle;
    stepEl.appendChild(img);
  }

  const capWrap = document.createElement("div");
  capWrap.className = "demo-caption-wrap";
  const cap = document.createElement("p");
  cap.className = "demo-caption";
  cap.textContent = card.caption;
  capWrap.appendChild(cap);

  if (card.explanation) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "why-toggle";
    toggle.textContent = "Why it matters ▾";
    const exp = document.createElement("p");
    exp.className = "demo-explanation";
    exp.textContent = card.explanation;
    exp.hidden = true;
    toggle.addEventListener("click", () => {
      exp.hidden = !exp.hidden;
      toggle.textContent = exp.hidden ? "Why it matters ▾" : "Why it matters ▴";
    });
    capWrap.appendChild(toggle);
    capWrap.appendChild(exp);
  }

  stepEl.appendChild(capWrap);
  container.appendChild(stepEl);
}

export function startLearningModule(day, els, onDone) {
  const demo = DEMO_STEPS[day];
  els.topic.textContent = `Day ${day} — ${demo.topic}`;

  const sequence = buildSequence(demo);
  let index = 0;

  function renderCurrent() {
    renderCard(els.content, sequence[index]);
    els.stepLabel.textContent = `${index + 1} / ${sequence.length}`;
    els.progressFill.style.width = `${(index / (sequence.length - 1)) * 100}%`;
    els.prevBtn.style.visibility = index === 0 ? "hidden" : "visible";
    els.nextBtn.textContent = index === sequence.length - 1 ? "Done" : "Next";
  }

  els.prevBtn.onclick = () => {
    if (index > 0) { index -= 1; renderCurrent(); }
  };
  els.nextBtn.onclick = () => {
    if (index < sequence.length - 1) { index += 1; renderCurrent(); }
    else finishOnce();
  };

  renderCurrent();

  let done = false;
  function finishOnce() {
    if (done) return;
    done = true;
    clearInterval(timerInterval);
    onDone();
  }

  els.readyBtn.onclick = finishOnce;

  const timerEnd = Date.now() + LEARNING_MODULE_MINUTES * 60 * 1000;
  const tick = () => {
    const ms = Math.max(0, timerEnd - Date.now());
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    els.timer.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    if (ms <= 0) finishOnce();
  };
  tick();
  timerInterval = setInterval(tick, 500);
}
