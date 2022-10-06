//constants
const gameButtons = document.querySelectorAll('.game-button');
const startButton = document.getElementById("start");
const keys = [
    {
        id: 0,
        audioURL: 'sounds/do.mp3' ,
        color: "#E76F51",
        name: "do"
    },
    {
        id: 1,
        audioURL: 'sounds/re.mp3' ,
        color: "#F4A261",
        name: "re"
    },
    {
        id: 2,
        audioURL: 'sounds/mi.mp3' ,
        color: "#E9C46A",
        name: "mi"
    },
    {
        id: 3,
        audioURL: 'sounds/fa.mp3' ,
        color: "#2A9D8F",
        name: "fa"
    }
]

startButton.addEventListener('click', gameLoop);

//game loop
async function gameLoop(){
    startButton.removeEventListener('click', gameLoop);

    let gameNotes = [];
    let result= "playing";
    gameNotes =  await computerPlay(gameNotes);
    gameNotes =  await computerPlay(gameNotes);
    console.log(gameNotes);
    result = await playerMatchMelody(gameNotes);


    let passNotes=gameNotes.slice();    //shallow copy cuz arrays are passed by reference
    
    startButton.addEventListener('click', gameLoop);
    return
}
async function computerPlay(existingNotes){
    existingNotes.push(Math.floor( Math.random()*4));
    let passNotes=existingNotes.slice();    //shallow copy cuz arrays are passed by reference
    await playNotes(passNotes);
    return existingNotes;
}
async function playerMatchMelody(existingNotes){
    let result;
    for(let i=0;i<existingNotes.length;i++){
        result = await playerMatchNote(existingNotes[i])
        if (result == "game over"){
            return result;
        }
    }
}
async function playerMatchNote(playingNote){
    gameButtons.forEach(key => {
        const noteURL = "sounds/"+key.id + ".mp3";
        let keyId=0;
        switch(key.id){
            case "do": keyId=0;
                break;
            case "re": keyId=1;
                break;
            case "mi": keyId=2;
                break;
            default: keyId=3;
        }
        key.addEventListener("click", ()=>playKey(keyId));
        //save
        //if (playingNote != keyId)
    })

}
async function playNotes(playingNotes){
    if(playingNotes.length>=1){
        await playKey(playingNotes[0]);
        playingNotes.shift();
        await playNotes(playingNotes);
    }
    else{
        return
    }
    
}
async function playKey(key){
    myAudio = new Audio (keys[key].audioURL).play();
    gameButtons[key].classList.add(keys[key].name+"Clicked");
    await delay(650)
    gameButtons[key].classList.remove(keys[key].name+"Clicked");
    await delay(250)
    return
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
