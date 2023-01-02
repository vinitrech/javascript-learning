let grades = [10, 30, 90, 60, 40, 70, 32];

grades = grades.sort(descendingSort);
console.log(grades);

function descendingSort(x, y){ // will compare the numbers and shift if the second is bigger
    return y - x;
}

grades = grades.sort(ascendingOrder);
console.log(grades);

function ascendingOrder(x, y){ // will compare the numbers and return true if the first is bigger
    return x - y;
}
