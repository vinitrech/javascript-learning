document.getElementById("myDiv").addEventListener("click", rotate)
document.getElementById("myDiv").addEventListener("click", scale)

function scale() {
    document.getElementById("myDiv").style.transform = 'scale(1.05)';
}

function rotate() {
    document.getElementById("myDiv").style.transform = 'rotate(35deg)';
}