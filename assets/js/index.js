"use strict";

function task()
{

  const userNumber = Number( prompt("Your number:") );

  let i = 0;

  while(i++ < userNumber) {
    console.log("Inside cycle - Hello! " + i);
  }

  console.log("End of program");

}
