"use strict";

function solveEquation(a, b, c) {
  // код для задачи №1 писать здесь
  let root = [];
  let d;
  
  d = b ** 2 - 4 * a * c;
  
  if (d === 0) {
    root[0] = -b / (2 * a)
  }
  else if (d > 0) {
    root[0] = (-b + Math.sqrt(d)) / (2 * a)
    root[1] = (-b - Math.sqrt(d)) / (2 * a)
  }
  
  return root;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let dateNow = new Date();
  let monthCount;
  let monthPercent;
  let loanBody;
  let payment;
  let totalAmount

  if (date < dateNow && percent > 0 && contribution > 0 && amount > 0) { // Обработка крайних случаев
    return Error;
  } else if (date.getFullYear() - dateNow.getFullYear() === 0) {
    monthCount = date.getMonth() - dateNow.getMonth();
  } else {
    monthCount = (date.getMonth() - dateNow.getMonth()) + (12 * (date.getFullYear() - dateNow.getFullYear()));
  }
  monthPercent = (percent / 12) / 100;
  loanBody = amount - contribution;
  payment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** monthCount) - 1)))
  totalAmount = (parseInt(contribution) + (payment * monthCount)).toFixed(2);

  return totalAmount;
}

