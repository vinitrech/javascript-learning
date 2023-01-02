sum(1,2, displayConsole);

function sum(num1, num2, callBack) { // pass a function as paratemer, and call it after calculating
    let result = num1 + num2;
    callBack(result);
}

function displayConsole(output) {
    console.log(output);
}
