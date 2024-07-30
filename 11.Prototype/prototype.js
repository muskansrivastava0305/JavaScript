let myName = "komal   "

console.log(myName.length);

//--------------------------------------------------------------------------------------
let allNames = ['komal', 'rohan'];

let namesTitle = {
    komal: "kumari",
    rohan: "singh",


    getRohanTitle: function(){
        console.log(`Spidy power is ${this.rohan}`);
    }
}

Object.prototype.muskan = function(){
    console.log(`komal is present in alal objects`)
}

namesTitle.muskan();
