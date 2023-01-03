async function loadFile() { // async_await returns a promise
    let fileLoaded = true;

    if (fileLoaded) {
        return "File loaded"
    } else {
        throw "File not loaded"
    }
}

async function startProcess() {
    try {
        let message = await loadFile(); // await can only be used inside async functions
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

startProcess();
