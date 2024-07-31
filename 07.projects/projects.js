// BMi Calculator Project (JS COde)===============================================================================
//================================================================================================================


const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === 0 || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if( weight === 0 ||  weight < 0 || isNaN( weight)){
        results.innerHTML = `Please give a valid weight ${ weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
            results.innerHTML = `<span>${bmi}</span>`
    }
});

//==============================================================================================================
// Digital Colock (Js Code)=====================================================================================
//==============================================================================================================


const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000)

//================================================================================================================
//Color Switch Project (js COde)===================================================================================
//=================================================================================================================

const buttons = document.querySelectorAll('.button')
const body = document.querySelectorAll('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

//===============================================================================================================
// Guess the Number Project (Js code)============================================================================
//===============================================================================================================


let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.querySelector('#subm')
const userInput = document.querySelector('#game');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const loworHigh = document.querySelector('.lowhig')
const startOver = document.querySelector('.resultPass')

const p = document.createElement('p')

let prevGuess = [];
let numbeGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter a valid number')
    }else if(guess > 100 ){
        alert('please enter a valid number')
    }else {
        prevGuess.push(guess)
        if(numbeGuess === 11){
           displayGuess(guess)
           displayMessage(`Game over. Random number was ${randomNumber}`)
           endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guess it right`)
        endGame()
    }else if( guess < randomNumber){
        displayMessage(`Number is too Low`)
    }else if (guess > randomNumber)
        displayMessage(` Number is to High`)

}


function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numbeGuess++;
    remaining.innerHTML = `${11 - numbeGuess} `;
}


function displayMessage(message){
    loworHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numbeGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numbeGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}


//=============================================================================================================
// Change-Background-Colour Project (JS Code)==================================================================
//=============================================================================================================


// gtenerate a random color

const randomCOlor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i=0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(Math.random() * 16);
let intervalId ;

const startChangingColor = function () {
    if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
    }``
    function changeBgColor (){
    document.body.style.backgroundColor = randomCOlor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
} ;

document.querySelector ('#start').addEventListener('click' , startChangingColor);

document.querySelector('#stop').addEventListener('click' , stopChangingColor)