// object litrerals 

const mySym = Symbol("key1")

const user = {
    name: "komal",
    age: 19,
    [mySym] : "myKey1",
    email : "hdgh52@gmail.com",
    isLoggedIn : false
}

console.log( user.email);
console.log(user["age"]);
console.log(user[mySym]);