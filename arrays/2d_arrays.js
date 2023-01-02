let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatos"];
let meats = ["eggs", "chicken", "fish"];

let lists = [fruits, vegetables, meats];

for(let list of lists){
    console.log(`Items of list:`)
    for(let item of list){
        console.log(item);
    }
    console.log();
}