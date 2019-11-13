"use strict";

function task()
{

let x = 1;
let y = 10;

x = (y++, x+=y);

console.log("Y = " + y );
console.log("X = " + x );

}
