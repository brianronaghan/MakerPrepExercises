
console.log("JS work sheet");
alert("separate JS is working.");

var userName = prompt("what's your name?");
document.querySelector("#welcome").textContent=userName;

var sourceofDiv = document.querySelector("#source").textContent;
document.querySelector("#swap1").textContent = sourceofDiv;

if(userName === "brian")
{
alert("you win.");
}
else {
alert(userName + " is a dumb name.")
}

alert("turn on your JS console");

alert("check the console for counting evens with a for loop");

console.log("Counting evens with a for loop");

for (var x = 0; x<101; x++)
{
if (x % 2===0)
{
console.log(x);
}
}
alert("check the console for fizzbuzz");

console.log("fizz buzz with while loops");
var y=0;

while(y < 100){
y++;
if(y % 3 === 0){
if(y % 5 === 0){
console.log("FizzBuzz");
}
else{
console.log("fizz");
}
}
else if (y % 5 === 0){
console.log("buzz");
}
else{
console.log(y);
}
}

console.log("cumulative sum with a for loop");
alert("we'll cumulative sum the numbers up to a certain value.");
var num = prompt("What number?");
console.log(num);
num = parseInt(num);
var tempTot = 0;
var total = 0;
for (var a = 1; a <= num; a++)
{
tempTot += a;
console.log(total + " with " + a + " is " + tempTot);
total = tempTot;
}
alert(total);

alert("Here's a pretty useless exercise called exercise 5. Nest whiles.")
console.log("exercise 5 with nested whiles");

var i = 0;
var n = 5;
var j;
while(i < n ){
j = 0;
while (j < n){
console.log("i is " + i + "j is " + j);
j++;
}
i++;
}

alert("Here's 6. The meet number game with nested whiles. It's also annoying.")
var x = 1;
var userChoice = parseInt(prompt("how long should this go?"));
var y = 1;
var statement = "";
while(x <= userChoice)
{
  statement = "welcome " + x;
  while (y < x)
  {
    if (y === 1)
    {
    statement += ", meet ";
    statement += y;
  }
    else if ((x - y) === 1){
    statement += " and ";
    statement += y;
  }
    else{
    statement += (", " + y);
  }
    y++;
  }

  console.log(statement);
  y=1;
  x++;
}

alert("Playing RPS. A useful thingy.");
do {
var userRPS ="";
compRPS = "";
do
{
  do{
    userRPS = prompt("rock, paper or scissors?");

  }
  while (userRPS !== "rock" && userRPS !== "paper" && userRPS !== "scissors")
alert("you chose " + userRPS);
  var compNUM = Math.random();
  if (compNUM < .34){
    compRPS = "rock";
        alert("computer chose " + compRPS);
  }
  else if (compNUM < .67) {
    compRPS = "paper";
    alert("computer chose " + compRPS);

  }
  else {
    compRPS = "scissors";
        alert("computer chose " + compRPS);
  }
  if(userRPS === compRPS){
    alert("tie. play again.");
  }
}
while (userRPS === compRPS)

switch (userRPS)
{
  case "rock":
  if(compRPS === "scissors")
  {
    alert("User's rock break's computer's scissors.");
  }
  else{
    alert("Computer's paper covers user's rock.");
  }
  break;
  case "paper":
  if (compRPS === "scissors")
  {
    alert("Computer's scissors cut user's paper.");
  }
  else {
    alert("User's paper covers computer's rock.");
  }
  break;
  case "scissors":
  if (compRPS === "paper")
  {
    alert("User's scissors cut computer's paper.");
  }
  else {
    alert("Computer's rock breaks User's scissors.");
  }
  break;
}
}while(confirm("wanna play again?"))

alert("Now guess a random number between one and a ceiling.");

do{
var ceiling = 0;

do{
  ceiling = parseInt(prompt("Gimme a ceiling."));
}
while(typeof(ceiling) !== "number" || !ceiling) // if you enter nothing, it will have Nan and the thing'll run forever while you guess. lookup how to make sure it's Not Nan

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var secretNumber = getRandomIntInclusive(0,ceiling);
var userGuess = 0;
var numTries = 0;

console.log(secretNumber);

do{
    userGuess = parseInt(prompt("guess the number"));
    numTries++;
    if(userGuess === secretNumber)
    {
      alert("You guessed right! The number was " + secretNumber + " and it only took you " + numTries + " tries to guess.");
    }
    else if (userGuess > secretNumber){
      alert("sorry, too high.");
    }
    else {
      alert("sorry, too low.")
    }
  }
while(userGuess !== secretNumber)

// be nice to check the number of guesses against the number by luck. i.e. if the ceiling is 2, than 1 guess is average. if the ceiling is 6, then i know someone has 18% chance of getting it right. What does that mean the average number of guesses is? THIS WAS BEFORE I IMPLEMENTED high/low feedback

console.log(secretNumber + " guessed in " + numTries);
var playAgain = confirm("wanna play again?");
}
while(playAgain)

alert("Yo, this is what they call the miracle of compound interest.");

var startBalance = parseInt(prompt("What's your current balance?"));
var runningBalance = startBalance;
var targetBalance = parseInt(prompt("How much do you want to have by retirement?"));
var interestRate = parseFloat(prompt("What's your interest rate? (x.x%)"));
var decInterestRate = ((interestRate/100) +1.00);
console.log("You start with " + startBalance + " and your decimalized 1+ interest rate is " + decInterestRate);
var years = 0;
while (runningBalance < targetBalance)
{
     runningBalance = runningBalance * decInterestRate;
     years++;
     console.log("After " + years + " yrs you got " + runningBalance);
   }
alert("For an initial investment of $" + startBalance + ", saving $" + targetBalance + " at " + interestRate + "% interest will take " + years + " years.");
*/
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
state_capitals[California]; // ?? IS: "Sacrament"
*/

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
