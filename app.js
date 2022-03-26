'use strict';
function addition(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === '+') return addition(num1, num2);
  if (operator === '-') return subtract(num1, num2);
  if (operator === '*') return multiply(num1, num2);
  if (operator === '/') return divide(num1, num2);
}

const btn = document.querySelectorAll('.calculator-btn');
btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.currentTarget.innerText);
    const operation = (document.querySelector('.calculator-result').textContent += e.currentTarget.innerText);
    const arr = [...operation];
    return arr;
  });
});
