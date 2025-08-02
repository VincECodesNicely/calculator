const container = document.querySelector(".container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("[data-num]");
const operandButtons = document.querySelectorAll("#operand");
const equals = document.querySelector("#equal-btn");
const decimalPoint = document.querySelector("#decimal");
let operand = "";
let numOne;
let numTwo;
let currentInput = "";

function displayNumber(number) {
  display.textContent += number;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(numOne, operand, numTwo) {
  let result;
  switch (operand) {
    case "+":
      result = addition(numOne, numTwo);
      break;
    case "-":
      result = subtraction(numOne, numTwo);
      break;
    case "x":
      result = multiplication(numOne, numTwo);
      break;
    case "÷":
      result = divide(numOne, numTwo);
      break;
  }
  return Math.ceil(result * 100) / 100;
}

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    currentInput += element.textContent;
    display.textContent += element.textContent;
  });
});

operandButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (currentInput === "") return;

    if (numOne !== undefined && operand !== null) {
      numTwo = parseFloat(currentInput);
      console.log("n1:", numOne);
      console.log("n2:", numTwo);
      console.log("operand:", operand);

      const result = operate(numOne, operand, numTwo);
      numOne = result;
      display.textContent = result + " " + element.textContent + " ";
    } else {
      numOne = parseFloat(currentInput);
      display.textContent += " " + element.textContent + " ";
    }

    operand = element.textContent;
    currentInput = "";
  });
});

document.querySelector("#backspace-btn").addEventListener("click", () => {
  currentDisplayValue = display.textContent.slice(0, -1);
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentDisplayValue;
});

decimalPoint.addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    display.textContent += ".";
  }
});

document.querySelector("#AC").addEventListener("click", () => {
  numOne = undefined;
  operand = null;
  currentInput = "";
  display.textContent = "";
});

equals.addEventListener("click", () => {
  if (currentInput === "") return;
  numTwo = parseFloat(currentInput);
  const result = operate(numOne, operand, numTwo);
  display.textContent = result;
  currentInput = result;
  numOne = null;
  numTwo = null;
  operand = null;
});
