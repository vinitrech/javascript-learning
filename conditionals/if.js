let age = 21;

if(age < 20){
    console.log("Less than 20")
}else if(age === 20){
    console.log("Equal to 20");
}else{
    console.log("Older than 20");
}

// ternary
console.log(age < 20 ? "Less than 20":age === 20 ? "Equal to 20":"Older than 20");