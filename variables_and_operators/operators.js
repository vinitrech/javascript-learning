let students = 20;

console.log(students + 1)
console.log(students - 1)
console.log(students / 2)
console.log(students * 2)
console.log(students % 2)

console.log(students++)
console.log(++students)
console.log(students == 20) // equal
console.log(students === 20) // identical


console.log(students === 20 && 1 === 1); // and
console.log(students === 20 || 1 === 1); // or
console.log(students != 20); // not equal
console.log(students !== 20); // not identical

let ob = {
    a: 1,
    b: 2
}

ob.a ||= 2; // set to 3 if value does not exist, if exists, keep current value
ob.a &&= 2; // set to 3 if value is already set
ob.a ??= 2; // set to 2 if value is null or undefined