"use strict";

function taskWhileFirst()
{

  const howMany = prompt("Enter how many # you want:");
  let i = 0;

  while(i++ < howMany){
    console.log("# " + i);
  }

}

// ---

function taskWhileSecond()
{

  const toWhatNumber = prompt("Enter to what number you whant yo count:");

  let i = 0;
  let numbers = 1;

  while(i++ < toWhatNumber){
    console.log("Number " + numbers++ + " @ " + i);
  }

}

// ---

function taskWhileFourth()
{

  const delNumberOne = prompt("Enter first number:");
  const delNumberTwo = prompt("Enter second number:");

  let i = 1;
  let end;

  if(delNumberOne <= delNumberTwo) end=delNumberOne;
  else end=delNumberTwo;


  while(i++ <= end){
    if( delNumberOne % i === 0 && delNumberTwo % i === 0 ){
      console.log("Delitel " + i + " is common for " + delNumberOne + " and " +delNumberTwo);
    }
  }

}

// --- 5 ---

function taskWhileFifth()
{

  const factorialNumber = prompt("Enter number for factorial:");

  let i = 1;
  let factorialResult = 1;

  while( i <= factorialNumber){
    factorialResult = i * factorialResult;
    console.log(i + " * \n(factorialResult = " + factorialResult + ")");
    i++;
  }
}

// --- 6 ---

function taskDoWhileOne()
{
  let answer;
  do{
    answer = prompt("Please, enter answer for 2 + 2 * 2");
  }while(answer != 6);
  alert("Good job!");
}

// --- 7 ---

function taskDoWhileTwo()
{
  let number = 1000;
  console.log(" Number on start = " + number);

  let i = 0;
  do{
    number/=2;
    i++;
    console.log(" Number = " + number + " @ i = " + i);
  }while(number >=  50);
}

// --- 8 ---

function taskForOne()
{
  const userNumberEnter = prompt("Please, enter your number");

  for (let i=1; i<=100; i++){
    if(userNumberEnter % i === 0) console.log(i + " is kratnoye " + userNumberEnter);
  }
}
