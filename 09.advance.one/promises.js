const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log('promisee consumed');
})
// //---------------------------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task two');
        resolve()
    },1000)
}).then(function(){
    console.log("asyns 2 resolved");
})

// //---------------------------------------------------------------------------

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username: "hello" , email: "Msj32@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
})

// //----------------------------------------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'Komal', password: '1234'})
          }  else{
                reject ('error something went wrong')
        }
    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
   console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log('the promise is either resolved or rejectd'))

//console.log(username);

//-------------------------------------------------------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = true // false
      if(!error) {
        resolve({username: 'javascript', password:'123'})
      }else{
         reject('error: js went wrong')
      }
    },1000)
})

async function consumePromiseFive(){
    //const response = await promiseFive
    //console.log(response); 
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

//-----------------------------------------------------------------

// async function getAllUsers(){
//     // const response = await fetch('https://api.github.com/users/muskansrivastava0305')
//     // const data = response.json()
//     // console.log(data);
//     try {
//         const response = await fetch('https://api.github.com/users/muskansrivastava0305')
//         const data =await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers();

//-----------------------------------------------------------------------------------------

fetch('https://api.github.com/users/muskansrivastava0305')
.then((response)=> {
    return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error) => console.log(error))