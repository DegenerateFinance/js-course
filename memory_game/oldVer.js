const gameButtons = document.querySelectorAll('.game-button');
const startButton = document.getElementById("start");
const colorDo = "#E76F51";
const colorRe = "#F4A261";
const colorMi = "#E9C46A";
const colorFa = "#2A9D8F";
function playKey(audioUrl, key){
    new Audio(audioUrl).play();
    let color;
    switch(key.id){
        case "do": color=colorDo;
            break;
        case "re": color=colorRe;
            break;
        case "mi": color=colorMi;
            break;
        default: color=colorFa;
    }
    key.style.backgroundColor = color;

    /*change mouseup to wait some time */
    delay(200).then(()=>key.style.backgroundColor= "black");
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function gameLoop(){
    console.log("now playing");
    let noteOrder=[];
    noteOrder.push(5);
    noteOrder.push(5);
    noteOrder.push(5);
    noteOrder.push(5);
    console.log(noteOrder, noteOrder.length);
    noteOrder = computerPlay(noteOrder);
    gameButtons.forEach(key => {
        const noteURL = "sounds/"+key.id + ".mp3";
        key.addEventListener("click", ()=>playKey(noteURL, key));
    })
}
function playAnimation(noteNum){
}
function computerPlay(existingNotes){
    for(let i=0;i<existingNotes.length;i++){
        console.log(existingNotes[i], i);
    }
    
    delay(5000).then(()=>console.log('timesUp!'));
    return existingNotes
}
startButton.addEventListener('click', gameLoop);
