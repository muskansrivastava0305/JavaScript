//short hand notetion
const balance = 1000

if (balance < 500) {
  console.log("less than 500");
} else if(balance < 750){
  console.log("less than 750");
}else if (balance < 900){
  console.log("less than 750");
}else{
  console.log("less than 1200");
}


// Nullish Coalescing Operator (??): null undefined------------------------------------
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 30

console.log(val1);

//Terniary Operator---------------------------------

//conditon ? true : false

const teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//----------------------------------------------------------------------------------
//falsy values
//false, 0, -0, Bigint 0n, "" , null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

/*================If-Statement=====================*/

var x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}

/*================if-else-Statement=================*/

let x = 9;
if (x > 5) {
    console.log("x is greater then 5");
} else {
    console.log("x is less then 5")
}

/*=================Switch-Statement=================*/

let day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is not Monday or Tuesday");
}
