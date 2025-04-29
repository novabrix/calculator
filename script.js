"use strict";
const values = [1, 2, 3, 4];
const smallValues = [24, 7];

function adder(arr) {
  return arr.reduce(function (total, value) {
    return (total = total + value);
  }, 0);
}

function subtracter(arr) {
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
}
