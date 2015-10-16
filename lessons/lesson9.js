

console.log("lesson9 objects");
alert("separate JS is working.");

var myCat = {
name: "squibble",
age: 5,
isAlive: true,
furColor:"black",
asshole: true
};
var spot
console.log(myCat.age);
console.log(myCat["age"]);

var prop = "isAlive";
console.log("dot notation ref via var = " + myCat.prop);
console.log("[] notation ref via var = " + myCat[prop]);

var dreamLife ={};
// new object attribute using dot:
dreamLife.job ="plumber";
// new object attribute using var assignment to a string, then bracket with var
var aProp = "salary";
dreamLife[aProp] = 75000;
//console to check it worked
console.log(dreamLife.job + " making " + dreamLife.salary);

console.log(dreamLife["blank"]); // evaluates to blank
// console.log(dreamLife[]); // won't run

// EXC4
/*
var demo_object = {
    one: 1,
    two: 2,
    three: 3
};
var one = "three";

demo_object['two']; // ?? IS: 2
demo_object[one]; // ?? IS: 3
*/
var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin',
    Batman: "Robin"
};

// TEST of various dot/bracket references
var place = 'California';

/*
state_capitals['place'] // ?? IS: undefined
state_capitals.place   // ?? IS: undefine
state_capitals[place] // ?? IS: 'Sacremento'

state_capitals['California']; // ?? IS: "Sacramento"
state_capitals.California;   // ?? Is: "Sacramento"
(state_capitals[California]); // ?? is undefined
(state_capitals[place]); //is: Sacramento
*/
// for in loop:
console.log("for in loop yo");
for (var state in state_capitals){
  console.log("Capital of " + state + " is " + state_capitals[state]);
}
// exercise 6
var politicians = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};
var all = "";

for (var job in politicians){
  all += (politicians[job] + " ");
}

console.log(all);

for (var pos in politicians){
  console.log(pos + ": " + politicians[pos]);
}
console.log("exc 7 - make a reverse directory using for in loop");
// exercise 7
var revPol ={};//empty object
//for in loop - going through ORIGINAL, because revPol is empty and can't be traversed
for (var spot in politicians){
  revPol[politicians[spot]] = spot; // first part sets the key of the new object spot TO the name of the key of the old
}

for (var pos in revPol){
  console.log(pos + ": " + revPol[pos]);
}
//stopped at exc 7
// here is 8:
var complex_object ={
 string: "I'm string",
 number: 42,
 adjs_as_obj: {brian: "normal string", patrick: "expensive", ronaghan: "chick magnet"},
 adjectives_array: ["normal string", "expensive", "last string"],
 random_obj: {word: "batman", num: 42, good: true, cock(){console.log("hi function in the random_obj");}}
};

console.log(complex_object.string);
console.log(complex_object["number"]);
console.log(complex_object.adjectives_array[2] + " should be last string");
console.log(complex_object.adjs_as_obj["patrick"] + " should be expensive?"); //expensive
console.log(complex_object.random_obj["word"] + " should be batman");
console.log(complex_object.random_obj.cock);
console.log(complex_object);

complex_object.random_obj.cock(); // in order to access a function inside an object, you must include the parantheses
