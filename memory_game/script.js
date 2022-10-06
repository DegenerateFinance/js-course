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
    let gameNotes = [];
    
    gameNotes.push(0,1,2,3,2,3);
    
    let passNotes=gameNotes.slice();    //shallow copy cuz arrays are passed by reference
    await playNotes(passNotes);
    

    //playKey(0);

    return
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
    await delay(600)
    gameButtons[key].classList.remove(keys[key].name+"Clicked");
    return
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
