"use strict";

const firstValue = prompt("Enter firstValue:");
const secondValue = prompt("Enter secondValue:");

const mark = prompt("Please enter opeartion mark:");

switch(mark){
  case "+":{console.log(sumNumbers(firstValue, secondValue));} break;
  case "-":{console.log(minusNumbers(firstValue, secondValue));} break;
  case "*":{console.log(multipeNumbers(firstValue, secondValue));} break;
  case "/":{console.log(divideNumbers(firstValue, secondValue));} break;
  default:{alert("ERROR!!! WTF!!!");} break;
}

// ТУТЪ ФУНКЦИИ, БАРИН!

function sumNumbers(numberOne, numberTwo){
  return +numberOne + +numberTwo;
}

function minusNumbers(numberOne, numberTwo){
  return +numberOne - +numberTwo;
}

function multipeNumbers(numberOne, numberTwo){
  return +numberOne * +numberTwo;
}

function divideNumbers(numberOne, numberTwo){
  return +numberOne / +numberTwo;
}
