function firstMessage(){
    console.log("First message");
}

function secondMessage(){
    console.log("Second message");
}

setInterval(firstMessage, 1000);
setInterval(secondMessage, 2000);