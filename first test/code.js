let difficultSpelling = "Mississippisssss";
let myRegex = /s+?u/ig; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);
