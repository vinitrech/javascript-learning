let numbers = [1,2,3,4,5,6];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));

let username = "User Name";
console.log(...username);

let class1 = ["Student 1", "Student 2", "Student 3"];
let class2 = ["Student 4", "Student 5", "Student 6"];
let finalclass = [];

finalclass.push(...class1, ...class2);
console.log(finalclass);