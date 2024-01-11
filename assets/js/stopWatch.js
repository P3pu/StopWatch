let milisecond = 0;
let second = 0;
let minutes = 0;
let hour = 0;

let init = null;

document.querySelector(".start-timer").addEventListener("click", () => {
  return (init = setInterval(timer, 10));
});
document.querySelector(".pause-timer").addEventListener("click", () => {
  clearInterval(init);
});
document.querySelector(".reset-timer").addEventListener("click", () => {
  clearInterval(init);
  document.querySelector(".display-timer").innerHTML = "00:00:00:000";
});

const timer = () => {
  milisecond += 10;
  if (milisecond == 1000) {
    milisecond = 0;
    second++;
  } else if (second == 60) {
    second = 0;
    minutes++;
  } else if (minutes == 60) {
    minutes = 0;
    hour++;
  }

  let h = hour < 10 ? "0" + hour : hour;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = second < 10 ? "0" + second : second;
  let ms =
    milisecond < 10
      ? "00" + milisecond
      : milisecond < 100
      ? "0" + milisecond
      : milisecond;

  document.querySelector(".display-timer").innerHTML = `${h}:${m}:${s}:${ms}`;
};
