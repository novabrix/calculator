"use strict";
const shower = document.querySelector(".shower");
const body = document.querySelector(".display");
let resetMe = true;
let a, operator, b;
let refined, refinedCu;

function displayer(value) {
  // If number typed after answer is an operator, don't wipe the slate clean
  if (
    value === " * " ||
    value === " / " ||
    value === " + " ||
    value === " - "
  ) {
    console.log(`No Reset`);
    resetMe = false;
  }
  // If resetable, reset
  if (resetMe === true || shower.textContent === "0") {
    shower.textContent = "";
    resetMe = false;
    console.log(`one time`);
  }
  // Show the new number
  shower.textContent = `${shower.textContent + value}`;
  refined = shower.textContent.split(" ");
  console.log(`Refined: ${refined}`);
  // If there are four numbers, run this to get rid of them
  if (refined.length >= 4) {
    vision();
  }
}

function clearSmall() {
  let holder = shower.textContent.split(" ");
  holder.pop("");
  let holderTwo = String(holder);
  let holderThree = holderTwo.replace(",", " ");
  console.log(holderThree);
  return shower.textContent = holderThree;
}

function clearAll() {
  return (shower.textContent = "0");
}

function vision() {
  calculator(refined);
}

function calculator(refinedSQ) {
  console.log(`RefinedSQ: ${refinedSQ}`);
  a = Number(refinedSQ[0]);
  operator = refinedSQ[1];
  b = Number(refinedSQ[2]);
  if (operator === "+") {
    refinedCu = adder(a, b);
  } else if (operator === "-") {
    refinedCu = subtractor(a, b);
  } else if (operator === "*") {
    refinedCu = multiplier(a, b);
  } else if (operator === "/") {
    refinedCu = divider(a, b);
  } else {
    console.log(`Error!`);
  }
  if (refinedCu === Infinity) {
    theShower("Nope.");
  } else {
    refinedCu = Math.round(refinedCu * 100000) / 100000;
    theShower(refinedCu);
  }
  resetMe = true;
}

const keyboardable = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "/",
  "+",
  "-",
  ".",
  "=",
];

/* body.addEventListener(keypress, function (e) {
  let keyCheck = keyboardable.includes(e.key);
  console.log(`checked : ${keyCheck}`);
  
}); */

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

function theShower(value) {
  shower.textContent = value;
}
