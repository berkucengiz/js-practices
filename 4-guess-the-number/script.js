const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");
let guessesLeft = document.querySelector("#guessesLeft");


let randomNumber = 0;
const minRandomNumber = 1;
const maxRandomNumber = 100;
const totalShot = 10;
let remainingGuess;


txtNum.setAttribute("placeholder", `Type number between ${minRandomNumber}-${maxRandomNumber}`)
const start = () => {
    randomNumber = getRandomNumber();
    txtNum.removeAttribute("disabled");
    txtNum.value = "";
    txtNum.focus();
    btnGuess.classList.remove("d-none");
    btnStart.innerHTML = "Reset game";
    txtResult.innerHTML = "";
    remainingGuess = 0;
}   


const reset = () => {
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled","true");
    btnStart.innerHTML = "Start game";
}


const guess = () => {
   const guessNumber = Number(txtNum.value);
    if(!guessNumber || isNaN(guessNumber) || guessNumber>maxRandomNumber || guessNumber<minRandomNumber){
        txtResult.innerHTML = `Please type a number between ${minRandomNumber}-${maxRandomNumber}`;
        return;
    }
    if(guessNumber === randomNumber){
        txtResult.innerHTML = "🏆🏆🏆 You win! 🏆🏆🏆";
        txtResult.classList.replace("text-danger", "text-success");
        reset();
    }
    else if(guessNumber > randomNumber){
        txtResult.innerHTML = `${guessNumber} is too high! Lower the number! 👎`;
    }
    else{
        txtResult.innerHTML = `${guessNumber} is too low! Raise the number! 👍`;
    }
    txtNum.focus();
    txtNum.value="";
    remainingGuess++
    guessesLeft.innerHTML = totalShot - remainingGuess  ;
    if (guessNumber != txtNum.value && remainingGuess >= totalShot) {
        txtResult.innerHTML = "I'm sorry! You have no more attempts left."
        txtNum.setAttribute("disabled","true");
    }
}

txtNum.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
    guess();
    }
    });

const getRandomNumber = () => {
    return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) ) + minRandomNumber;}