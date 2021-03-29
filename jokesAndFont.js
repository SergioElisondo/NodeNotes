// document.getElementById('button1').addEventListener('click', buttonRun)

const jokes = require("give-me-a-joke")
const colorChoice = require('colors')

// function buttonRun(){
        jokes.getRandomDadJoke(function(joke){
        console.log(joke.random) // <---- this will change the color of the joke response
    })
// }
// document.getElementById('displayMessage').innerText = theJokes


// console.dir(jokes) <--- this was to check what methods we have for jokes
// console.dir(colorChoice) <--- this was to check what methods we have for colors



// order was: 
//1. in git, "npm i give-me-a-joke... and npm install colors" <--- "i" or "install" are the same
//2. create a variable and "require" them
//3. call them in a function or something
