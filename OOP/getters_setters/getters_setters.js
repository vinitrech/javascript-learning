class Car {
    constructor(power) {
        this._power = power; // _ means that the property is protected
    }

    get power(){
        return `${this._power} HP`
    }

    set power(power){
        this._power = power;
    }
}

let car = new Car(100);
console.log(car.power);
car.power = 500;
console.log(car.power);