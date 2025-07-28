const container = document.querySelector(".container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("[data-num]");

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    display.textContent += element.textContent;
  });
});

document.querySelector("#AC").addEventListener("click", () => {
  display.textContent = "";
});

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
