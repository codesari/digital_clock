const time = document.getElementById("time");

const singleButton = document.getElementById("singleButton");
const stopButton = document.getElementById("stop");

let hour = "00";
let min = "00";
let sec = "00";
let ms = "00";

let interval;

singleButton.addEventListener("click", start);
function start() {
  interval = setInterval(timer, 10);
  singleButton.removeEventListener("click", start);
  singleButton.addEventListener("click", pause);
  singleButton.innerHTML = "Pause";
}
function pause() {
  clearInterval(interval);
  singleButton.removeEventListener("click", pause);
  singleButton.addEventListener("click", resume);
  singleButton.innerHTML = "Resume";
}
function resume() {
  interval = setInterval(timer, 10);
  singleButton.removeEventListener("click", resume);
  singleButton.addEventListener("click", pause);
  singleButton.innerHTML = "Pause";
}
stopButton.addEventListener("click", reset);
function reset() {
  clearInterval(interval);
  hour = "00";
  min = "00";
  sec = "00";
  ms = "00";
  timeKeeper();
  singleButton.removeEventListener("click", resume);
  singleButton.removeEventListener("click", pause);
  singleButton.addEventListener("click", start);
  singleButton.innerHTML = "Start";
}

const timer = () => {
  timeKeeper();
  ms++;

  if (ms < 10) {
    ms = "0" + ms;
  }
  if (ms > 99) {
    ms = 0;
    ms = "0" + ms;

    sec++;
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (sec > 59) {
      sec = 0;
      sec = "0" + sec;
      min++;
      if (min < 10) {
        min = "0" + min;
      }
      if (min > 59) {
        min = 0;
        min = "0" + min;
        hour++;
        if (hour < 10) {
          hour = "0" + hour;
        }
      }
    }
  }
};

function timeKeeper() {
  time.innerHTML = `
  <span>${hour}</span>
        <span>:</span>
        <span class="min">${min}</span>
        <span>:</span>
        <span>${sec}</span>
        <span>:</span>
        <span>${ms}</span>`;
}
