const element = document.getElementById("button1")

element.onclick = doSomething; // be sure no to invoke it, it's a callback
element.onload = () => {
    alert("button loaded");
}

element.onchange = () => {
    alert("button changed");
}

function doSomething() {
    alert("Do something");
}