console.log("lesson 13");

// each map filter reduce

function each (collection, callback){
  if(Array.isArray(collection)){
    for (var x=0; x<collection.length;x++){
      callback(collection[x]);
    }
  }
  else{
    for (var spot in collection){
      callback(collection[spot]);
    }
  }
}

function map(collection, actionFunc){
  var results = [];
  each(collection, function(spotVal){
    results.push(actionFunc(spotVal));
  });
  return results;
}

function filter(collection, predicateFunc){
  var filtered = [];
  each(collection, function(currentVal){
    if(predicateFunc(currentVal)){
      filtered.push(currentVal);
    }
  });
  return filtered;
}

function reduce(collection, actionFunc, initalVal){
  var accum, index;
  if(arguments.length>2){
    accum = initalVal;
    index = 0;
  }
  else{
    accum = collection[0];
    index = 1;
  }
  while(index<collection.length){
    accum =actionFunc(accum,collection[index]);
    index++;
  }
  return accum;
}








// map test stuff:
/*function squareRoot(num){
  return num/num)
}
*/
function doubler (num){
  return num*2;
}
function squarer (num){
  return num*num;
}
function factorial(num){
  if (num === 1){
    return 1;
  }
  else{
    return num*factorial(num-1);
  }
  }
var arr = [1,2,3,4,5];
var doubledArray = map(arr, doubler);
var squaredArray = map(arr, squarer);
var factorialedArray = map(arr, factorial);
console.log("array " + arr);
console.log("array of doubled " + doubledArray);
console.log("array of squared " + squaredArray);
console.log("array of ! " + factorialedArray);



//filter test stuff

function isEven(number){
  if (number%2===0){
    return true;
  }
  else {
    return false;
  }
}

var full = [1,2,3,4,5,6,7,8,9,10];
var evens= filter(full,isEven);

console.log("list 1-10 "+full);
console.log("list even "+evens);

// test reduce

function add(num1,num2){
  return num1+num2;
}
function mult(num1,num2){
  return num1*num2;
}

var fullSum = reduce(full, add, 0);
var fullSumNoStart = reduce(full, add);

var fullProd = reduce(full, mult,1);

console.log("reduced sum " + fullSum);
console.log("reduced sum no start " + fullSumNoStart);

console.log("reduced product " + fullProd);
