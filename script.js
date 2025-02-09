document.getElementById("login-button").addEventListener("click", function() {
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("app-section").style.display = "flex";
});

document.getElementById("logout-button").addEventListener("click", function() {
  location.reload();
});

function showSection(sectionId) {
  document.querySelectorAll(".app-box").forEach(box => box.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

document.getElementById("show-countdown").addEventListener("click", () => showSection("countdown-container"));
document.getElementById("show-todo").addEventListener("click", () => showSection("todo-container"));
document.getElementById("show-timer").addEventListener("click", () => showSection("timer-container"));

document.getElementById("task-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      document.getElementById("add-task").click();
  }
});

document.getElementById("add-task").addEventListener("click", function() {
  const taskInput = document.getElementById("task-input");
  if (taskInput.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = taskInput.value;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.onclick = function() { li.remove(); };
      li.appendChild(deleteButton);
      document.getElementById("task-list").appendChild(li);
      taskInput.value = "";
  }
});

let timer;
let time = 0;
document.getElementById("start-timer").addEventListener("click", function() {
  clearInterval(timer);
  timer = setInterval(() => {
      time++;
      let minutes = Math.floor(time / 60).toString().padStart(2, '0');
      let seconds = (time % 60).toString().padStart(2, '0');
      document.getElementById("timer-display").textContent = `${minutes}:${seconds}`;
  }, 1000);
});

document.getElementById("stop-timer").addEventListener("click", function() {
  clearInterval(timer);});