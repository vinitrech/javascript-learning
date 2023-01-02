let students = ["name1", "name2", "name3"];

students.forEach(capitalize)
students.forEach((element) => {
    console.log(element);
})

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}