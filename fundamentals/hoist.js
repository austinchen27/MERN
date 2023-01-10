//1 
console.log(hello); // logs undefined
var hello = 'world'; // sets variable hello = "world"

//2 
var needle = 'haystack'; // sets global variable needle = "haystack"
test(); // runs test function
function test(){ // create test function
    var needle = 'magnet'; // sets local test function variable needle = "magnet"
    console.log(needle); // logs magnet
}

//3 
var brendan = 'super cool'; // sets variable brendan = "super cool"
function print(){ // creates print function
    brendan = 'only okay'; // sets variable brendan = "only okay"
    console.log(brendan); // logs "only okay"
}
console.log(brendan); // logs "super cool"

//4
var food = 'chicken'; // sets variable food = "chicken"
console.log(food); // logs "chicken"
eat(); // runs eat function
function eat(){ // creates eat function
    food = 'half-chicken'; // sets variable food = "half-chicken"
    console.log(food); // console logs "half-chicken"
    var food = 'gone'; // sets variable food = "gone"
}

//5 
mean(); // error
console.log(food);
var mean = function() { // this line hurts my eyes
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//6 
console.log(genre); // undefined
var genre = "disco"; // sets variable genre = "disco"
rewind(); // calls rewind function
function rewind() { // creates rewind function
    genre = "rock"; // sets variable genre = "rock"
    console.log(genre); // logs rock
    var genre = "r&b"; // sets variable genre = "r&b"
    console.log(genre); // logs r&b
}
console.log(genre); // logs disco

//7 
dojo = "san jose"; // undefined
console.log(dojo); // undefined
learn(); // calls learn function
function learn() { // creates learn function
    dojo = "seattle"; // variable dojo not created
    console.log(dojo); // undefined
    var dojo = "burbank"; // creates variable dojo = "burbank"
    console.log(dojo); // logs burbank
}
console.log(dojo); // undefined