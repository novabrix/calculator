"use strict";
const shower = document.querySelector(".shower");
const body = document.querySelector("body");
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
  return (shower.textContent = holderThree);
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

const keyboard = [
  "C",
  "E",
  "Enter",
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
  " * ",
  " / ",
  " + ",
  " - ",
  ".",
];

body.addEventListener("keydown", function (e) {
  let keyCheck = keyboard.includes(e.key);
  console.log(`KeyCheck: ${keyCheck}`);
  console.log(`Key Pressed: ${e.key}`);
  if (keyCheck = "true") {
    if (e.key === "C") {
      clearSmall();
    } else if (e.key === "E") {
      clearAll();
    } else if (e.key === "Enter") {
      vision();
    } else if (e.key === "0") {
      displayer("0");
    } else if (e.key === "1") {
      displayer("1");
    } else if (e.key === "2") {
      displayer("2");
    } else if (e.key === "3") {
      displayer("3");
    } else if (e.key === "4") {
      displayer("4");
    } else if (e.key === "5") {
      displayer("5");
    } else if (e.key === "6") {
      displayer("6");
    } else if (e.key === "7") {
      displayer("7");
    } else if (e.key === "8") {
      displayer("8");
    } else if (e.key === "9") {
      displayer("9");
    } else if (e.key === "") {
      displayer("one");
    } else if (e.key === "*") {
      displayer(" * ");
    } else if (e.key === "/") {
      displayer(" / ");
    } else if (e.key === "+") {
      displayer(" + ");
    } else if (e.key === "-") {
      displayer(" - ");
    } else {
      console.log(`Ran, but nothing worked!`);
    }
  }
});

// FUNCTION CALC
let adder = (a, b) => a + b;
let subtractor = (a, b) => a - b;
let multiplier = (a, b) => a * b;
let divider = (a, b) => a / b;

// REPETITIVE FUNCTIONS

function theShower(value) {
  shower.textContent = value;
}
