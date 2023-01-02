class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age)
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age)
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit", 5, 50);
const fish = new Fish("Fish", 2, 30);
const hawk = new Hawk("Hawk", 3, 40);

console.log(rabbit);
console.log(fish);
console.log(hawk);