const time = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let milliseconds = 0;
time.innerHTML = `${hour} : ${minute} : ${second} : ${milliseconds}`;

startButton.addEventListener("click", () => {
  const start = () => {
    milliseconds++;
    time.innerHTML = `${hour} : ${minute} : ${second} : ${milliseconds}`;
    if (milliseconds >= 99) {
      milliseconds = 0;
      second++;
      if (second > 59) {
        second = 0;
        minute++;
        if (minute > 59) {
          minute = 0;
          hour++;
        }
      }
    }
    setTimeout(start, 16.7);
  };
  start();
});

// Kronometre
// const krono = document.querySelector("#clock");

// let sn = 55;
// let isControl = false;
// let intv;
// let min = 0;

// function baslat() {
//   isControl = !isControl;
//   if (isControl) {
//     intv = setInterval(() => {
//       sn++;
//       if (sn > 59) {
//         min++;
//         sn = 0;
//       }

//       let hourAlarm = prompt("Enter an hour,please..");
//       let minAlarm = prompt("Enter a minute,please..");
//       if ((min == hourAlarm) & (sn == minAlarm)) {
//         alert("adasdasdas");
//       }

//       if (min < 10) {
//         krono.innerHTML = `0${min} :  ${sn}`;
//       } else krono.innerHTML = `${min} :  ${sn}`;
//     }, 1);
//   } else {
//     clearInterval(intv);
//   }
// }

// function reset() {
//   sn = 0;
//   krono.innerHTML = 0;
// }
// alert
