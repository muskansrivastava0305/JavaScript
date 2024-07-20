// const pname = ['kjjk' , 'jasdj' ,'asjk']

// const value = pname.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(value)


//--------------Filters-------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter ((num) => num > 3)
// console.log(newNums);

//foreach-------------------------

const newNums = []

myNums.forEach( (num) => {
    if (num>4){
        newNums.push(num)
    }
})

console.log(newNums);