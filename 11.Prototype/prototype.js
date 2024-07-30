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
    console.log(`komal is present in all objects`)
}

Array.prototype.heykomal = function(){
    console.log(`komal say hello`)
}
//namesTitle.muskan();
allNames.muskan()
allNames.heykomal();

//---------------------------------------------------------------------

const user = {
    name: "komal",
    email: "jhsj@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user

//modern syntax------------------------------

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = " my name             "
String.prototype.trueLength = function(){
    console.log(`${(this)}`);
    console.log(`${(this.name)}`);
    console.log(`True lenght is : ${this.trim().length}`)
}

anotherUserName.trueLength();

