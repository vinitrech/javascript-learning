const car = {
    model: "Mustang",
    color: "Red",
    year: 2023,

    drive : function(){
        console.log(`Driving ${(this.model)}`);
    },

    brake: function(){
        console.log("Braking");
    }
}

const car2 = {
    model: "Corvette",
    color: "Blue",
    year: 2022,

    drive : function(){
        console.log(`Driving ${(this.model)}`); // this references to a particular object depending on the immediate context
    },

    brake: function(){
        console.log("Braking");
    }
}


console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brake();

car2.drive();
car2.brake();

console.log(this); // refers to the "window" object in the browser