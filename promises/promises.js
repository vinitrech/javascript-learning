//Promises states: Pending, rejected and fulfilled.
//Promises are divided in 2 parts, the producing and consuming codes.
//Promises have 2 callbacks, resolve and reject, to handle success or error

const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;

    if (fileLoaded) {
        resolve("File loaded");
    } else {
        reject("File not loaded");
    }
});

promise.then(value => console.log(value)).catch(error => console.log(error));


const promise2 = new Promise(resolve => {
    setTimeout(resolve, 5000);
});

promise2.then(() => console.log("Completed"));


const wait = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(5000).then(() => console.log("Completed"));