//-----------------laxical Scoping------------------------------------------
// let x = 10;

// if (true) {
//   let y = 20;
//   console.log(x);
//   console.log(y); 
// }

// console.log(y);

 //------------------Closure------------------------------------------------

function outer() {
  let z = 11;

  function inner() {
    console.log(z);
  }

  return inner;
}

const innerFunc = outer();
innerFunc();