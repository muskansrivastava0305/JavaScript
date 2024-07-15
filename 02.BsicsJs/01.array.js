 let myArr = [0, 1, 3 ,4]
 let myHeros = ["komal" , "shivansh"]

 let myArr1 = new Array(1, 2, 3, 4)
 //console.log(myArr[1]);

 //Array Method 

//  myArr.push(6)
//  console.log(myArr);

myArr.pop()
//console.log(myArr);

myArr.unshift(9)
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr)

const newArr = myArr.join()
//console.log(typeof newArr);
//console.log(newArr);



//-------slice, slplice---------

console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

