const colorDo = "#E76F51";
const colorRe = "#F4A261";
const colorMi = "#E9C46A";
const colorFa = "#2A9D8F";
const startButton = document.getElementById("start");

const gameButtons = document.querySelectorAll('.game-button')
console.log(gameButtons);

gameButtons.forEach(keys => {
    const noteURL = "sounds/"+keys.id + ".mp3";
    keys.addEventListener("click", ()=>playSound(noteURL));
})
function playSound(audioUrl){
    new Audio(audioUrl).play();
}
function gameLoop(){
    console.log("now playing")
}