import { DAY_NAMES } from "./quiz.js";
import { TUTORIALS } from "./tutorials.js";
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

function renderTutorialContent(container, tutorial) {
  container.innerHTML = "";

  const goal = document.createElement("p");
  goal.className = "lesson-goal";
  goal.innerHTML = `<strong>Goal:</strong> ${tutorial.goal}`;
  container.appendChild(goal);

  tutorial.lessons.forEach((lesson) => {
    const block = document.createElement("div");
    block.className = "lesson";

    const head = document.createElement("div");
    head.className = "lesson-head";
    head.innerHTML = `<span class="lesson-title">${lesson.title}</span><span class="lesson-mins">~${lesson.minutes} min</span>`;
    block.appendChild(head);

    const list = document.createElement("ul");
    list.className = "lesson-points";
    lesson.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      list.appendChild(li);
    });
    block.appendChild(list);

    container.appendChild(block);
  });

  const task = document.createElement("p");
  task.className = "practice-task";
  task.innerHTML = `<strong>You'll practice:</strong> ${tutorial.practiceTask}`;
  container.appendChild(task);
}

export function startLearningModule(day, els, onDone) {
  const tutorial = TUTORIALS[day];
  els.topic.textContent = `Day ${day} — ${tutorial.topic}`;
  renderTutorialContent(els.content, tutorial);

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
