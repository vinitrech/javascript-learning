let username = "username";
let inbox = 5;

login();

function login() {
    console.log("logging in");
    displayUserName();
    displayUserInbox()

    function displayUserName() {
        console.log(`Welcome, ${username}`);
    }

    function displayUserInbox() {
        console.log(`You have ${inbox} new messages!`);
    }
}
