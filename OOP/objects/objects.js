const car = {
    model: "Mustang",
    color: "Red",
    year: 2023,

    drive : function(){
        console.log("Driving");
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