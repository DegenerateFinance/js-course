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

//main
startButton.addEventListener('click', gameLoop);

//game loop
function gameLoop(){
    let gameNotes = [];

    gameNotes=computerPlay(gameNotes);
    delay(600*(gameNotes.length+1)).then(()=>userPlay(gameNotes));
    console.log(gameNotes);
    return
}

function computerPlay(computerNotes){
    let newNote= Math.floor((Math.random()*4)); //rand 0 to 3
    computerNotes.push(newNote);
    playNotes(computerNotes);
    return computerNotes;
}
function userPlay(compareNotes){
    let userNotes=[];
    console.log("playsth");
    /*
    gameButtons.forEach(gameElement=>{
        gameButtons.addEventListener("click", )
    })
    */
}
function playNotes(playingNotes){
    for(let i=0;i<playingNotes.length;i++){
        delay(620*i).then(()=>playKey(playingNotes[i]));
    }
    return
}

function playKey(key){
    myAudio = new Audio (keys[key].audioURL).play();
    gameButtons[key].classList.add(keys[key].name+"Clicked");
    delay(600).then(()=>gameButtons[key].classList.remove(keys[key].name+"Clicked"));
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}