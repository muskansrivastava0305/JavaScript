//Dates

let myDate = new Date()
//  console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2001 , 4 , 3 , 6 ,7)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
