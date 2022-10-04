//constants
const gameButtons = document.querySelectorAll('.game-button');
const startButton = document.getElementById("start");
const keys = [
    {
        id: 0,
        audioURL: 'sounds/do.mp3' ,
        color: "#E76F51"
    },
    {
        id: 1,
        audioURL: 'sounds/re.mp3' ,
        color: "#F4A261"
    },
    {
        id: 2,
        audioURL: 'sounds/mi.mp3' ,
        color: "#E9C46A"
    },
    {
        id: 3,
        audioURL: 'sounds/fa.mp3' ,
        color: "#2A9D8F"
    }
]

//main
startButton.addEventListener('click', gameLoop);

//game loop
function gameLoop(){
    let gameNotes = [];
    gameNotes=computerPlay(gameNotes);
    gameNotes=computerPlay(gameNotes);
    gameNotes=computerPlay(gameNotes);
    playKey(2);
    console.log(gameButtons);
}

function computerPlay(computerNotes){
    let newNote= Math.floor((Math.random()*4)+1);
    computerNotes.push(newNote);
    playNotes(computerNotes);
    return computerNotes;
}

function playNotes(playingNotes){
    for(let i=0;i<playingNotes.length;i++){
        //console.log(playingNotes[i]);
    }
    return
}

function playKey(key){
    new Audio (keys[key].audioURL).play();
    gameButtons[key].style.backgroundColor= keys[key].color;
}