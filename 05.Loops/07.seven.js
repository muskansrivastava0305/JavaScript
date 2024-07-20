const myNums = [1, 2, 3, 4, 5, 6, 7, 8,]

//const newNumber = myNums.map((num) => num +10)

const newNums = myNums
.map((num) => num *10)
.map((num) => num + 2)
.filter((num) => num >= 50)
console.log(newNums);


//Array=Reduce()------------------------------------------------
const nums = [1,2,3]

// const mytotal = nums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },4)


//-------arrow-function
// const mytotal = nums.reduce((acc , currval) => acc + currval,0)

// console.log(mytotal);

const myCourses = [
{
    course : 'Js',
    price :456
},
{
    course : "py",
    price :787
},
{
    course : 'c',
    price :900
},
{
    course : 'c++',
    price :90
}
]

const priceToPay = myCourses.reduce((acc , item) => acc + item.price, 0)
console.log(priceToPay);