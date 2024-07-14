// function sayMyNmae(){
//     console.log("k");
//     console.log("k");
//     console.log("k");
// }

//sayMyNmae()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

//addTwoNumber(3,3)

// function addTwoNumber(number1, number2){
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumber(3,3)
// console.log("Result:" , result);



// function loginUserId(username){
//     if(username === undefined){  //if (!username)
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

//console.log(loginUserId("komal"))
// console.log(loginUserId());

//**************************Function object and array************************

function calculateCartPrice(...num1){
    //function calculateCartPrice(var1, var2...num1){
    return num1
}

console.log(calculateCartPrice(7363,7364,8938,3783))

const user = {
    username: "komal",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username: "sama",
    price: 786

})


const myArray = [54,84,84,43]

function secondValue(getArray){
    return getArray[1]
}

//console.log(secondValue(myArray))
console.log(secondValue([645,38847,473]))