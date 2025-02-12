const hours = document.querySelector(".time__hour");
const minutes = document.querySelector(".time__minute");
const seconds = document.querySelector(".time__second");
const days = document.querySelector(".date");
const WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const week = WEEKDAY[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  hours.innerText = `${hour + ":"}`;
  minutes.innerText = `${minute + ":"}`;
  seconds.innerText = `${second}`;
  days.innerText = `${day}/${month}/${year}, ${week}`;
}

getTime();
setInterval(getTime, 1000);
