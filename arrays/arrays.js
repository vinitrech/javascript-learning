let fruits = ["apple", "orange", "banana"];

console.log(fruits, fruits[0]);

fruits.push("coconut"); // add to end
console.log(fruits);

fruits.pop(); // remove last
console.log(fruits);

fruits.unshift("mango"); // add to the beginning
console.log(fruits);

fruits.shift(); // remove the first element
console.log(fruits);

console.log(fruits.length); // get array size
console.log(fruits.indexOf("apple"));

for (let fruit of fruits){
    console.log(fruit);
}

console.log(fruits.sort());
console.log(fruits.reverse());