console.log("codeathon");

function each(collection, callback){
  if(Array.isArray(collection)){
    for(var x=0; x<collection.length;x++){
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
  var results =[];
  each(collection, function(spotVal){
    results.push(actionFunc(spotVal));
  });
return results;
}

function filter(collection, predicateFunc){
  var filtered = [];
  each(collection, function(currentEl){
    if(predicateFunc(currentEl)){
      filtered.push(currentEl);
    }
  });
  return filtered;
}

function reduce(collection, callback, initialVal){
  var accum, index;
  if(arguments.length>2){
    accum = initialVal;
    index = 0;
  }
  else {
    accum = collection[0];
    index =1;
  }
  while(index<collection.length){
    accum = callback(accum, collection[index]);
    index++;
  }
  return accum;

}
var userString = prompt("enter a sentence to be checked for holes");

function hasHole(letter){
  if(letter === 'B'||letter==='Q'||letter==='P'||letter==='R'||letter==='D'||letter==='O'||letter==='A'||
  letter==='e'||letter==='d'||letter==='q'||letter==='d'||letter==='b'||letter==='a'||letter==='g'||letter==='o'||letter==='p'){
    return true;
  }
  else{
    return false;
  }
}

var holes = filter(userString, hasHole);

console.log(holes.length + " holes : " + holes);
var sidekicks = [
    {name: "Robin",           hero: "Batman"   },
    {name: "Supergirl",       hero: "Superman" },
    {name: "Fatman",          hero: "Mister America"},
    {name: "Oracle",          hero: "Batman"   },
    {name: "Doiby Dickles",   hero: "Green Lantern" },
    {name: "BatGirl",         hero: "Batman"},
    {name: "Pieface",         hero: "Green Lantern" }
];

var batPeeps = filter(sidekicks, belongsBat);

function belongsBat(collVal){
  if(collVal["hero"]==="Batman"){
    return true;
  }
  else{
    return false;
  }
}

each(batPeeps, function (spotVal){
  console.log(spotVal);
});
console.log(batPeeps);

//map to return only the names, filter to get the list down

var GLnames = map(filter(sidekicks, function(spot){
  if(spot["hero"]==="Green Lantern"){
    return true;
  }
  else{
    return false;
  }
}),function(currentEl){
  return currentEl["name"];
});
console.log(GLnames);

//3
function contains (collection, value){
  var doesIt=false;
  doesIt = reduce(collection, function(accum, currentEl){
    if (currentEl===value){
      return true;
    }
    else {
      return accum;
    }
  }, false);
//reduce with a function that, what?
// that checks if the current El is the val, and returns true, or doesn't change

  return doesIt;
};

var list = [1,2,3,4,5];

console.log(contains(list, 9));
console.log(contains(list,5));

//4

var entry = prompt("Enter the coin values you want exchanged, space delimited.");
var coinArray = entry.split(" ");



var maxExchange = map(coinArray, function(num){
  var converted = (Math.floor(num/4) + Math.floor(num/3) + Math.floor(num/2));
  if (converted >num){
    return converted;
  }
  else {
    return num;
  }
});

for (var a=0;a<coinArray.length;a++){
  console.log("Your " + coinArray[a] + " MKS coin converts to $" + maxExchange[a] + ".");
}

//5

function findPal(start){
  while (!isPal(start)){
    start++;
  }
  return start;
}

function isPal(number){
  numAsString = number.toString();
  //console.log("numstring"+ numAsString + typeof numAsString); this was to test a bug
  for(var i=0; i<numAsString.length;i++){
    if (numAsString[i]!==numAsString[numAsString.length-1-i]){ //remember the array is zero indexed, so gotta take one off
      return false;
    }
  }
  return true;
}
console.log(isPal(1001));



var numEntry = prompt("enter numbers to find palindromes of space delimited");

var arrNums = numEntry.split(" ");

var arrPals = map(arrNums, findPal);

for (var b=0;b<arrNums.length;b++){
    console.log("Smallest palindrome larger or equal to "+arrNums[b]+" is "+arrPals[b]+".");
}
//6
// 1 = open, 0 = close



//output which are open
function createArray(){
var numTweets = prompt("How many tweets are there?");
  var tweetArray = [];
for (var f=0;f<numTweets; f++){
  tweetArray[f]=0;
  }
  return tweetArray;
}
var tArr = createArray();
var seq = prompt("Which tweet(s) would you like to click on? c for close all o for open all. SD");
var clickArray = seq.split(" ");

console.log(seq);
// each with the clickArray, and then modify the tweetArray in the anon function

each(clickArray, function(currentVal){
  //3 cases, a number, c or o;
  if(currentVal ==='c'){
    tArr =map(tArr, function(spotVal){
      return '0';
    });
  }
  else if (currentVal==='o'){
    tArr =map(tArr, function(spotVal){
      return '1';
    });
  }
  else{
    if (tArr[Number(currentVal)-1]==='1'){
      tArr[Number(currentVal)-1]='0';
    }
    else{
      tArr[Number(currentVal)-1]='1';
    }
  }
});

console.log("tweets: "+ tArr);

numOpen = reduce(tArr,function(totalOpen, spotVal){
  if (spotVal==='1'){
    return totalOpen +1;
  }
  else{
    return totalOpen;
  }
},0);

console.log(numOpen + " tweets open.");


//7
// alphabetize the letters of a string
// turn the string to an array
// use reduce to find the lowest letter?
//pop that off into the new array
// then toString it

function alphabetSoup (string){
    string.toLowerCase();
    var letArr = string.split("");
    var alphabetized=[];
    for (var a=0;a<letArr.length;a++){
      if(letArr[a]===' '){
        letArr.splice(a,1);
      }
    }

    while(letArr.length>0){
    var lowRemaining = reduce(letArr, function(currentLow, currentEl){
      if(currentEl.charCodeAt()<currentLow.charCodeAt()){
        return currentEl;
      }
      else{
        return currentLow;
      }
    });
  for(var x=0;x<letArr.length;x++){
    if(letArr[x]===lowRemaining){
      alphabetized.push(letArr[x]);
      letArr.splice(x, 1);
    }
  }
  }
  alphabetized= alphabetized.join(",");
  return alphabetized;
}


var theString = prompt("enter a string to be fucking alphabetized");


console.log(alphabetSoup(theString));







// tests
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
