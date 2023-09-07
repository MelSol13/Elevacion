// GIVEN
/*console.log(example);
var example = "I'm the example!";*/
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

/*var example = "I'm the example!";
console.log(example);*/

let example = "I'm the example!";
console.log(example);

//Predicción de salida 1 = undefined
console.log(hello);
var hello = 'world';

//Predicción de salida 2 = magnet
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

//predicción de salida 3 = super cool
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Predicción de salida 4 = half-chicken
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//Predicción de salida 5 = mi predicción =fish, pero da type error de que mean no es una función 
/*mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);*/

//Predicción de salida 6 = r&b
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//Predicción de salida 7 = Mi predicción = burbank, correcta= burbank y sanjose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Predicción de salida 8 =
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
