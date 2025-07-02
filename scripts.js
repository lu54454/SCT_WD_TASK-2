let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function updateTime() {
  const currentTime = Date.now() - startTime + elapsedTime;
  const hours = String(Math.floor(currentTime / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((currentTime % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((currentTime % 60000) / 1000)).padStart(2, '0');

  document.getElementById("display").textContent = ${hours}:${minutes}:${seconds};
}

function startStop() {
  if (!running) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
    running = true;
    document.querySelector(".buttons button:first-child").textContent = "Pause";
  } else {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    running = false;
    document.querySelector(".buttons button:first-child").textContent = "Start";
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  startTime = 0;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  document.querySelector(".buttons button:first-child").textContent = "Start";
}

function lap() {
  if (running) {
    const lapTime = document.getElementById("display").textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = Lap - ${lapTime};
    document.getElementById("laps").appendChild(lapItem);
  }
}