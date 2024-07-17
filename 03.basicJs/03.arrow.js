const user = {
    username: "komal",
    price: 900,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()

console.log(this);


// function hello() {
//     let username = "komal"
//     console.log(this.username);
// }

// //hello();

// const hello = function () {
//     let username ="komal"
//     console.log(this.username);
// }


// const hello = function () {
//     let username ="komal"
//     console.log(this.username);
// }

const hello = () => {
    let username = "komal"
    console.log(this);
}

hello();


