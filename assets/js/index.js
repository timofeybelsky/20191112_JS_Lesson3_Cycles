"use strict";

function task()
{

  const userNumber = Number( prompt("How many cycles?") );

  let i = 0;

  do{
    console.log("Cycle...");
  }while( i++ < userNumber );

  console.log("End of program");

}
