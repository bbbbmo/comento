const battery = document.querySelector(".battery");
const time = document.querySelector(".time");
var percent = 100;

function changeBattery() {
  if (percent == 0) {
    battery.textContent = `${"0%"}`;
    time.style.color = "#0d050f";
  } else {
    percent -= 1;
    battery.textContent = `${percent + "%"}`;
  }
}

changeBattery();
setInterval(changeBattery, 1000);
