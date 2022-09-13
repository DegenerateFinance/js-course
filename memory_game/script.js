const noteArray = [
    {
        name: "do",
        color: "#E76F51",
        element: document.getElementById("do"),
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

//startButton.addEventListener("click", gameLoop());
function gameLoop(){
    console.log("now playing")
}