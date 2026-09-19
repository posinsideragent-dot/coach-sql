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

function renderDemoContent(container, demo) {
  container.innerHTML = "";

  const goal = document.createElement("p");
  goal.className = "lesson-goal";
  goal.innerHTML = `<strong>Goal:</strong> ${demo.goal}`;
  container.appendChild(goal);

  demo.lessons.forEach((lesson) => {
    const block = document.createElement("div");
    block.className = "lesson";

    const head = document.createElement("div");
    head.className = "lesson-head";
    head.innerHTML = `<span class="lesson-title">${lesson.title}</span>`;
    block.appendChild(head);

    const stepsWrap = document.createElement("div");
    stepsWrap.className = "demo-steps";
    lesson.steps.forEach((step, i) => {
      const stepEl = document.createElement("div");
      stepEl.className = "demo-step";
      if (step.image) {
        const img = document.createElement("img");
        img.src = step.image;
        img.alt = step.caption || `${lesson.title} — step ${i + 1}`;
        img.loading = "lazy";
        stepEl.appendChild(img);
      }
      const capWrap = document.createElement("div");
      capWrap.className = "demo-caption-wrap";
      const cap = document.createElement("p");
      cap.className = "demo-caption";
      cap.textContent = `${i + 1}. ${step.caption}`;
      capWrap.appendChild(cap);
      if (step.explanation) {
        const exp = document.createElement("p");
        exp.className = "demo-explanation";
        exp.textContent = step.explanation;
        capWrap.appendChild(exp);
      }
      stepEl.appendChild(capWrap);
      stepsWrap.appendChild(stepEl);
    });
    block.appendChild(stepsWrap);

    container.appendChild(block);
  });

  const task = document.createElement("p");
  task.className = "practice-task";
  task.innerHTML = `<strong>You'll practice:</strong> ${demo.practiceTask}`;
  container.appendChild(task);
}

export function startLearningModule(day, els, onDone) {
  const demo = DEMO_STEPS[day];
  els.topic.textContent = `Day ${day} — ${demo.topic}`;
  renderDemoContent(els.content, demo);

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
