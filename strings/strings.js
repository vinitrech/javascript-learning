let randomString = " Random string ";

console.log(randomString.length);
console.log(randomString.charAt(0));
console.log(randomString.indexOf("n"));
console.log(randomString.lastIndexOf("n"));
console.log(randomString.trim());
console.log(randomString.trimStart());
console.log(randomString.trimEnd());
console.log(randomString.toUpperCase());
console.log(randomString.toLowerCase());
console.log(randomString.replaceAll(" ", "*"));

console.log(randomString.slice(0,5))
console.log(randomString.slice(randomString.indexOf("a"), 5))

//Method chaining
console.log(randomString.charAt(1).toUpperCase() + randomString.slice(randomString.indexOf("a"), randomString.lastIndexOf(" ")))
