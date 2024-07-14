function sayMyNmae(){
    console.log("k");
    console.log("k");
    console.log("k");
}

//sayMyNmae()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

//addTwoNumber(3,3)

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3,3)
console.log("Result:" , result);



function loginUserId(username){
    if(username === undefined){  //if (!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserId("komal"))
console.log(loginUserId());