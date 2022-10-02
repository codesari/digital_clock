const clock = document.getElementById("clock");
const time = document.getElementById("time");

const show = () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  const milisec = new Date().getMilliseconds();
  console.log(milisec);

  //   let second = new Date().toLocaleTimeString().slice(6, 8);
  //   console.log(second);
  let second = new Date().getSeconds();
  let status = "AM"; //! flag mantıgi..

  //   const times = new Date().toLocaleTimeString();

  //   let secondHour = times.slice(0, 2);
  //   if (secondHour > 12) {
  //     secondHour = secondHour - 12;
  //   }

  //   time.innerHTML = times;
  //   console.log(times);

  if (hour == 0) {
    hour = 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (hour > 12) {
    hour = hour - 12;
    status = "PM";
  }
  if (second == 0) {
    second = "0";
  }
  if (second < 10) {
    second = "0" + second;
  }

  clock.innerHTML = `${hour} :  ${minute} :  ${second}  ${status}`;
  setTimeout(show, 1000);
};
// show()
window.onload = show();
