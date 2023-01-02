let numbers = [1,2,3,4,5]
shuffle(numbers);
console.log(numbers);

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex !== 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temporary = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporary;
    }
}