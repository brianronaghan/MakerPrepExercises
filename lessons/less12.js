
console.log("lesson 12 functional crap");
alert("separate JS is working.");

var say_hi = function () {
  console.log('hi');
};

var greeter = say_hi;

//both of these should console log 'hi'
say_hi();
greeter();

say_hi = function () {
  console.log('meh');
};

//What will this do? Try it out!
say_hi(); // hi
greeter(); // meh

// so functions are basically pass by value
/*
var runner = function (fn) {
  console.log('Invoking a function now!');
  // a function that was passed as an argument to another function is called a CALLBACK
  fn();
};
//This is an example of an anonymous function; more on that in a minute
runner(function(){ console.log('okay')} );
//runner(say_hi);
//runner(greeter);

//Make sure you understand this one
runner( say_hi() ); // inside the function on line 28, it doesn't know what "fn" is because the invocation operator makes say_hi run, which thus means it's not passing a function thru.
*/

// exc1
function answer_logger(someFunc){

  var x = someFunc();
  console.log(x);
}

answer_logger(function(){
  return "I should be console logged";
});

//2
function answerCollector (arrOfFuncs){
    var resultsArray = [];
    for (var x=0; x<arrOfFuncs.length; x++){
      resultsArray[x] = arrOfFuncs[x]();
    }
    return resultsArray;
}

var fn1 = function () { return "this should be the first value in results array"; };

console.log(answerCollector([fn1, function(){ return "this should be the second value in results array" }]));

var returns_a_func = function () { return function(){ console.log('BOOP!') }; }; // have we booped yet?
var booper = returns_a_func();
// NO because it's an expression. it's just defining the variable, but doesn't call the function itself.

// exc 3
/*
function add_five () {
  return function (num){
    return num + 5;
  }
}
*/
var add_five = function() {
  return function (num){
    return num + 5;
  }
}

var add_fiver = add_five();
/*So I'm saying:

add_fiver is

*/

console.log(add_fiver(3));
console.log(add_five());


//exc 4 too easy. Duh. I get scope
//ex5 leaky functions where you don't mean to use global variables
theNum = 33;

function adds10 (){
  var num = theNum;
  console.log(10+num);
}

function Ladds10(){
  theNum +=10;
  console.log(theNum);
}

adds10();
console.log(theNum);
Ladds10();
console.log(theNum);
//Using bracket notation to look for letters in a string
var string ="fuckface";
var fCount=0;
for (var a=0; a<string.length;a++){
  if (string[a]==="f")
  {
    fCount++;
      }
}
console.log(fCount);

// exc 6 a double multiply by deal

function multBy (num1){
  theNumber = num1;
  return function (num) {
    return num*theNumber;
  }
}

var fuck10 = multBy(10);
console.log(fuck10(5));

var fuck7 =multBy(7);
console.log(fuck7(7));

fuck10 = multBy(11);
console.log(fuck10(5));
