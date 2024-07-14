// //var c = 300
// let a = 100


// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("inner" , a);
// }

// console.log(a);
// console.log(b);
// console.log(c);


//*******************************************

function one(){
    const username = "komal"

    function two(){
        const website = "linkdin"
        //console.log(username);
    }
    //console.log(website)

    two()
}

one()


if (true){
    const username = "komal"
    if(username === "komal"){
        const website = "linkdin"
        //console.log(username + website)
    }

    //console.log(website);
}

//console.log(username);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++*/


console.log(addone(6))
function addone(num){
    return num + 1
}


//console.log(addTwo(7))
const addTwo = function(num){ //expresssion
    return num + 2
}
console.log(addTwo(7))
