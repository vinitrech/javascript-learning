class Animal {
    alive = true;
    name = "animal";

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit);
console.log(rabbit.alive);
rabbit.eat()
rabbit.sleep()
rabbit.run()
console.log()

console.log(fish);
console.log(fish.alive);
fish.eat()
fish.sleep()
fish.swim()
console.log()

console.log(hawk);
console.log(hawk.alive);
hawk.eat()
hawk.sleep()
hawk.fly()
