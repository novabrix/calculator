"use strict";
const shower = document.querySelector(".shower");
let oneTimeUse = true;

function displayer(value) {
  if (oneTimeUse === true || shower.textContent === "0") {
    shower.textContent = "";
    oneTimeUse = false;
    console.log(`one time`);
  }
  console.log(value);
  return (shower.textContent = `${shower.textContent + value}`);
}

function clearAll() {
  return (shower.textContent = "0");
}

function vision() {
  let refined = shower.textContent.split(" ");
  calculator(refined);
}

function calculator(refinedSQ) {
  let a = Number(refinedSQ[0]);
  let operator = refinedSQ[1];
  let b = Number(refinedSQ[2]);
  if (operator === "+") {
    let refinedCu = adder(a, b);
    theShower(refinedCu);
  } else if (operator === "-") {
    let refinedCu = subtractor(a, b);
    theShower(refinedCu);
  } else if (operator === "*") {
    let refinedCu = multiplier(a, b);
    theShower(refinedCu);
  } else if (operator === "/") {
    let refinedCu = divider(a, b);
    theShower(refinedCu);
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

// REPETITIVE FUNCTIONS

function theShower (value) {
  shower.textContent = value;
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
