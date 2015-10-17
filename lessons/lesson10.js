

console.log("lesson 10 functions");
alert("separate JS is working.");

// exc 1
function printDate(){
  console.log(new Date());

}
printDate();

function returnDate(){
  return new Date();
}
console.log(returnDate());

//2
function randomNum (){
  var theNum = Math.floor(1 + Math.random() * 10);
  return theNum;
}
var hold = randomNum();

console.log(hold);
// without a variable holder:

console.log(randomNum());
//loop of 10 calls
for (var x = 0; x<10; x++)
{
    console.log(randomNum());
}

function double_value_logger (value1, value2) {
  console.log("chekc");
  console.log(value1);
  console.log(value1,value2);
}

double_value_logger(3,5);

//exercise 3
function tripler(number){
  return number *3;

}

function multiply (first,second){
  return first*second;
}

function divide (first, second){
  return first/second;
}

function remainder (first, second){
  return first % second;
}
// 15 x12 =180. 180/2 = 90. remainder 90 3 = 0
console.log (remainder(divide(multiply(tripler(5), 12),2),3));

// exc 4

function factoralOfN (number){
  var counter = number - 1;
  var total = number;
  while (counter > 0){
    total = total*counter;
    counter--;
  }
  return total;
}

console.log(factoralOfN(4));
console.log(factoralOfN(5));
console.log(factoralOfN(10));
console.log(factoralOfN(7));



// how do i do this using recursion? come back to that
function countBy (countBy, countUpTo){
  for(var x = 1; x<=countUpTo; x++){
    if(x % countBy === 0){
      console.log(x);
    }
  }
}

countBy(2,10);
countBy(5,100);
// exercise 5 - manual fizzbuzz
//upTo is the high number, fizzNum is the first divisible dealy, fizzWord is the thing we supposed to say
function manualFB (upTo, fizzNum, buzzNum, fizzWord, buzzWord){
  for(var count = 1; count<=upTo; count++){
    if (count % fizzNum === 0){
      if(count % buzzNum === 0){
        console.log(fizzWord + buzzWord);
      }
      else {
        console.log(fizzWord);
      }
    }
    else if (count % buzzNum === 0){
        console.log(buzzWord);
    }
    else{
      console.log(count);
    }
      }
}

// hold onto your butts

manualFB(100, 3,5,"fizz","buzz");

manualFB(100, 4,5, "fuck","stick");

manualFB(100, 2, 9, "two", "nine");


function fibIndex(spot){
  if(spot===1){
    return 0;
  }
  else if(spot===2){
    return 1;
  }
  else {

    var firstNum = 0;
    var secondNum = 1;
    var nextNum;
    for (var g = 3; g<=spot; g++){
      nextNum = firstNum+secondNum;
      firstNum=secondNum;
      secondNum = nextNum;
    }
    return secondNum;

  }
}

console.log(fibIndex(10)); //34! ya!YYYYYYYY
alert(fibIndex(prompt("spot in the fibonacci sequence please")));

// extra credit

function addition(one, two){
  return one + two;

}

function subtraction(one, two){
  return one - two;
}

function calculator(num1, num2, operation){
  switch(operation){
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
    case "add":
      return addition(num1, num2);
      break;
    case "subtract":
      return subtraction(num1, num2);
      break;
  }
}

console.log(calculator(3,5,"add"));
console.log(calculator(3,5,"multiply"));

console.log(calculator(100,50,"divide"));
