const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const displayElement = document.querySelector(".screen");
const numBtn = document.querySelectorAll(".numBtn");
const decimalPoint = document.querySelector("decimal");

let operatorOn = ""; // 연산자 입력
let previousNum = ""; //이전 값
let resentNum = ""; // 최근값

let calculate = (n1, operator, n2) => {
  let result = 0;
  switch (operator) {
    case "+":
      result = Number(n1) + Number(n2);
      break;
    case "-":
      result = Number(n1) - Number(n2);
      break;
    case "×":
      result = Number(n1) * Number(n2);
      break;
    case "÷":
      result = Number(n1) / Number(n2);
      break;
    case "%":
      result = Number(n1) % Number(n2);
    default:
      break;
  }
  return String(result);
};

let calculator = () => {
  let isFirstDigit = true;

  buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      let action = e.target.classList[0];
      let click = e.target.innerHTML;

      if (action === "operator") {
        operatorOn = click;
        previousNum = displayElement.textContent;
        displayElement.textContent = "";
        isFirstDigit = true;
      }
      if (action === "numBtn") {
        if (isFirstDigit && click === "0") {
          return;
        }

        if (displayElement.textContent === "" && operatorOn === "") {
          displayElement.textContent = click;
          previousNum = displayElement.textContent;
        } else if (displayElement.textContent !== "" && operatorOn === "") {
          displayElement.textContent = displayElement.textContent + click;
          previousNum = displayElement.textContent;
        } else if (displayElement.textContent === "" && operatorOn !== "") {
          displayElement.textContent = click;
          resentNum = displayElement.textContent;
        } else if (displayElement.textContent !== "" && operatorOn !== "") {
          displayElement.textContent = displayElement.textContent + click;
          resentNum = displayElement.textContent;
        }
        isFirstDigit = false;
      }

      if (action === "result") {
        displayElement.textContent = calculate(
          previousNum,
          operatorOn,
          resentNum
        );
        isFirstDigit = true;
      }
      if (action === "ce") {
        displayElement.textContent = "";
        previousNum = "";
        operatorOn = "";
        resentNum = "";
        isFirstDigit = true;
      }
    });
  });
};
calculator();
