//small text file stored on the computer
//data in cookies is stores in a key value pair

console.log(navigator.cookieEnabled)
document.cookie = "firstName=RandomName; expires=Sun, 1 Janurary 2030 12:00:00 UTC; path=/";
document.cookie = "cookieName=randomCookie; expires=Sun, 1 Janurary 2030 12:00:00 UTC; path=/"
console.log(document.cookie);

setCookie("email", "someEmail@gmail.com", 365);
setCookie("firstName2", "johnDoe", 365);

deleteCookie("email");

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expirex=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name) {
    setCookie(name, null, null)
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded);
}