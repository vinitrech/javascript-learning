let numbers = [1,2,3,4,5];

let result = numbers.reduce(checkout);

function checkout(total, element){ // total is the variable that is incremented on each iteration
    return total + element;
}

console.log(result);