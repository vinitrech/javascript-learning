class Car {
    static numberOfCars = 0; // static makes the CLASS have the numberOfCars shared between all objects, instead of each one having its own counter

    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);

Car.startRace();