class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10 health. Current health: ${this.health}`);
    }
}

const ninja1 = new Ninja("Snake Eyes");

ninja1.sayName(); // Output: "My ninja name is Snake Eyes"
ninja1.showStats(); // Output: "Name: Snake Eyes, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake(); // Output: "Snake Eyes drank sake and gained 10 health. Current health: 110"

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Programming is a way of life.");
    }
}

const sensei1 = new Sensei("Austin");

console.log("-------")

sensei1.speakWisdom();
// Output: "Austin drank sake and gained 10 health. Current health: 210"
// Output: "Programming is a way of life."