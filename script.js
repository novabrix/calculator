"use strict";
/* const values = [1, 2, 3, 4];
const smallValues = [24, 7]; */
let total;
const shower = document.querySelector('.shower');
let oneTimeUse = true;

function prompter() {
  const numOne = Number(prompt("Enter in the first number!"));
  const operand = prompt("Enter in the operand!")
  const numTwo = Number(prompt("Enter in the second number!"));
  calculator(numOne, operand, numTwo);
}

function displayer(value) {
  if (oneTimeUse === true || shower.textContent === "0") {
    shower.textContent = "";
    oneTimeUse = false;
    console.log(`one time`);
  }
  console.log(value);
  return shower.textContent = `${shower.textContent + value}`
}

function clearAll () {
  return shower.textContent = "0"
}

function calculator(a, operator, b) {
  if (operator === "+") {
    let refined = adder(a, b);
    console.log(refined);
  } else if (operator === "-") {
    let refined = subtractor(a, b);
    console.log(refined);
  } else if (operator === "*") {
    let refined = multiplier(a, b);
    console.log(refined);
  } else if (operator === "/") {
    let refined = divider(a, b);
    console.log(refined);
  } else {
    console.log(`Error!`);
  }
}

// FUNCTION CALC
function adder(a, b) {
  return a + b;
}

function subtractor(a, b) {
  return a - b;
}

function multiplier(a, b) {
  return a * b;
}

function divider(a, b) {
  return a / b;
}

/* function adder(arr) {
  return arr.reduce(function (total, value) {
    return (total = total + value);
  }, 0);
}

function subtractor(arr) {
  return arr.reduce(function (total, value) {
    return (total = total - value);
  }, arr[0] * 2);
}

function multiplier(arr) {
  return arr.reduce(function (total, value) {
    return (total = total * value);
  }, 1);
}

function divider(arr) {
  return arr.reduce(function (total, value) {
    return (total = total / value);
  }, (arr[0] * arr[0]));
} */
