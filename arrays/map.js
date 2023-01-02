let numbers = [1,2,3,4,5];

let squares = numbers.map(square);
squares.forEach(print);

function square(number1){
    return Math.pow(number1, 2);
}

function print(element){
    console.log(element);
}