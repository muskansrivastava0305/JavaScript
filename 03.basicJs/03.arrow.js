const user = {
    username: "komal",
    price: 900,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()