// Hello everyone, this is the core functionality file for this mini project.

// note 
/* modular way of programing(to do every bit of work
 we make a function for it, that's called moduler programing) */

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]; 
}

const drawGame = () => {
    msg.innerText = "The game has ended in draw, play again...";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Congratulations, You winnnn! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
} else {
  compScore++;
  compScorePara.innerText = compScore;
  msg.innerText = `Better luck, next time! You lose.. ${userChoice} can not beat ${compChoice}`;
  msg.style.backgroundColor = "red";
}
}

const playGame = (userChoice) =>{
// generate computer choice
const compChoice = genComChoice();

if (userChoice === compChoice){
    //Draw Game
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, papper
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        //rock, scissors 
        userWin = compChoice === "scissors" ? false : true;
    } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});

