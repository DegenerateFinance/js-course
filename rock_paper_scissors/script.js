const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");

let userChoice;
let computerChoice;
let result;

/*this triggers on click */
possibleChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (f)=>{
  userChoice = f.target.id;
  userChoiceDisplay.innerHTML=userChoice;
  getUserImg(userChoice);
  generateComputerChoice();
  getResult();
  
}))
function getUserImg(choice){
  switch(choice){
    case "rock": userImg.style.backgroundImage = "url(images/rock.jpg)";
      break;
    case "paper": userImg.style.backgroundImage = "url(images/paper.jpg)";
      break;
    case "scissors": userImg.style.backgroundImage = "url(images/scissors.jpg)";
      break;
    default:  
  }
}

function generateComputerChoice(){
  const rand1to3=Math.floor(Math.random()*3+1);
  switch (rand1to3){
    case 1: computerChoice = "rock";
      break;
    case 2: computerChoice = "paper";
      break;
    default: computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
  return computerChoice;
}
function getResult(){
  if (userChoice === computerChoice){
    result = "Draw!"; 
  }
  if ( userChoice === "rock" && computerChoice === "paper"){
    result = "You Lose !";
  }
  if ( userChoice === "rock" && computerChoice === "scissors"){
    result = "You Win !";
  }
  if ( userChoice === "paper" && computerChoice === "rock"){
    result = "You Win !";
  }
  if ( userChoice === "paper" && computerChoice === "scissors"){
    result = "You Lose !";
  }
  if ( userChoice === "scissors" && computerChoice === "rock"){
    result = "You Lose !";
  }
  if ( userChoice === "scissors" && computerChoice === "paper"){
    result = "You Win !";
  }
  resultDisplay.innerHTML = result;
  return result;
}