import { DAY_NAMES, getQuestionsForDay } from "./quiz.js";
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

export function startLearningModule(day, els, onDone) {
  const topic = DAY_NAMES[day];
  els.topic.textContent = `Day ${day} — ${topic}`;

  els.content.innerHTML = "";
  getQuestionsForDay(day).forEach((entry) => {
    const p = document.createElement("p");
    p.textContent = entry.why;
    els.content.appendChild(p);
  });

  let done = false;
  const finishOnce = () => {
    if (done) return;
    done = true;
    clearInterval(timerInterval);
    onDone();
  };

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
