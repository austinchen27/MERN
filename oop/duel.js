//Unit Card Objects
class Unit {
  constructor(name, cost, power, resilience) {
    this.name = name;
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

//Effect Card Objects
class Effect {
  constructor(name, cost, text, stat, magnitude) {
    this.name = name;
    this.cost = cost;
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(targetUnit) {
    targetUnit[this.stat] += this.magnitude;
  }
}

const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Play out the scenario

//1. Make an instance of "Red Belt Ninja"
console.log(`${RedBeltNinja.name} created with cost ${RedBeltNinja.cost}, power ${RedBeltNinja.power}, and resilience ${RedBeltNinja.resilience}`);

//1. Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
HardAlgorithm.play(RedBeltNinja);
console.log(`${HardAlgorithm.name} played on ${RedBeltNinja.name}. ${RedBeltNinja.name} now has resilience ${RedBeltNinja.resilience}`);

//2. Make an instance "Black Belt Ninja"
console.log(`${BlackBeltNinja.name} created with cost ${BlackBeltNinja.cost}, power ${BlackBeltNinja.power}, and resilience ${BlackBeltNinja.resilience}`);

//2. Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
UnhandledPromiseRejection.play(RedBeltNinja);
console.log(`${UnhandledPromiseRejection.name} played on ${RedBeltNinja.name}. ${RedBeltNinja.name} now has resilience ${RedBeltNinja.resilience}`);

//3. Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
PairProgramming.play(RedBeltNinja);
console.log(`${PairProgramming.name} played on ${RedBeltNinja.name}. ${RedBeltNinja.name} now has power ${RedBeltNinja.power}`);

//3. "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
BlackBeltNinja.resilience -= RedBelt