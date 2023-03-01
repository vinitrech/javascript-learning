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

// Set max execution time for promise with aux promise
async function fulfillWithTimelimit(timeLimit, task, failureValue) {
    let timeout;

    const timeoutPromise = new Promise((resolve, reject) => {
        timeout = setTimeout(() => {
            resolve(failureValue)
        }, timeLimit);
    });

    const response = await Promise.race([task, timeoutPromise]);

    if (timeout) {
        clearTimeout(timeout);
    }

    return response;
}
