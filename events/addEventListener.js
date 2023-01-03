const randomDiv = document.getElementById("div")

randomDiv.addEventListener("mouseover", changeRed); // with this method, it's possible to add multiple event listeners
randomDiv.addEventListener("mouseout", changeGreen); // with this method, it's possible to add multiple event listeners

function changeRed() {
    randomDiv.style.backgroundColor = "red";
}

function changeGreen() {
    randomDiv.style.backgroundColor = "green";
}

const outDiv = document.getElementById("outerDiv");
const inDiv = document.getElementById("innerDiv");

outDiv.addEventListener("click", changeBlue);
inDiv.addEventListener("click", changeBlue, true); // the event is triggered on the inner div first, the useCapture being true makes the outer div to be treated first

function changeBlue() {
    randomDiv.style.backgroundColor = "blue";
}