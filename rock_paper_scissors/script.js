const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
var rock = document.getElementById("rock");

let userChoice;
let computerChoice;
let result

rock.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
