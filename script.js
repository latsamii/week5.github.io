"use strict";

// 1pt: Simple Functions
function tickUp() {
  const counterEl = document.getElementById("counter");
  let count = parseInt(counterEl.textContent, 10);
  count++;
  counterEl.textContent = count;
}

function tickDown() {
  const counterEl = document.getElementById("counter");
  let count = parseInt(counterEl.textContent, 10);
  count--;
  counterEl.textContent = count;
}

// 1pt: Simple For Loop
function runForLoop() {
  const counterEl = document.getElementById("counter");
  const resultEl = document.getElementById("forLoopResult");

  const count = parseInt(counterEl.textContent, 10);

  // build: 0 1 2 ... count
  let output = "";
  for (let i = 0; i <= count; i++) {
    output += i + (i === count ? "" : " ");
  }

  resultEl.textContent = output;
}

// 1pt: Repetition with Condition
function showOddNumbers() {
  const counterEl = document.getElementById("counter");
  const resultEl = document.getElementById("oddNumberResult");

  const count = parseInt(counterEl.textContent, 10);

  let output = "";
  let first = true;

  for (let i = 1; i <= count; i += 2) {
    if (!first) output += " ";
    output += i;
    first = false;
  }

  resultEl.textContent = output;
}

// 1pt: Arrays
function addMultiplesToArray() {
  const counterEl = document.getElementById("counter");
  const count = parseInt(counterEl.textContent, 10);

  const arr = [];

  // If count < 5 => print []
  for (let n = Math.floor(count / 5) * 5; n >= 5; n -= 5) {
    arr.push(n);
  }

  console.log(arr); // print the array itself
}

// 2pts: Objects and Form Fields
function printCarObject() {
  const carType = document.getElementById("carType").value;
  const carMPG = document.getElementById("carMPG").value;
  const carColor = document.getElementById("carColor").value;

  const carObj = { cType: carType, cMPG: carMPG, cColor: carColor };
  console.log(carObj);
}

// 2pts: Objects and Form Fields pt. 2
function loadCar(n) {
  let carObj = null;

  if (n === 1) carObj = carObject1;
  if (n === 2) carObj = carObject2;
  if (n === 3) carObj = carObject3;

  if (!carObj) return;

  document.getElementById("carType").value = carObj.cType;
  document.getElementById("carMPG").value = carObj.cMPG;
  document.getElementById("carColor").value = carObj.cColor;
}

// 2pt: Changing Styles
function changeColor(n) {
  const p = document.getElementById("styleParagraph");

  if (n === 1) p.style.color = "red";
  if (n === 2) p.style.color = "green";
  if (n === 3) p.style.color = "blue";
}
