const noteArray = [
    {
        name: "do",
        color: "#E76F51",
        element: document.getElementById("do"),
        /*sound: new Audio("/sounds/do.mp3"),*/
    },
    {
        name: "re",
        color: "#F4A261",
        element: document.getElementById("re"),
    },
    {
        name: "mi",
        color: "#E9C46A",
        element: document.getElementById("mi"),
    },
    {
        name: "fa",
        color: "#2A9D8F",
        element: document.getElementById("fa"),
    },
]
const startButton = document.getElementById("start");
console.log(noteArray, startButton);

const butter = document.querySelectorAll('.game-button')

function playSound(){
    new Audio('sounds/do.mp3').play();
}

butter.forEach(keys => {
    keys.addEventListener("click", playSound);
})

function gameLoop(){
    console.log("now playing")
}