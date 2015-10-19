

console.log("lesson 11 functions");
alert("separate JS is working.");
// exc 1
var recipe = [];

recipe[0]="use app";
recipe[1]="pick cuisine";
recipe[2]="choose restaurant";
recipe[3]="find dish";
recipe[4]="check out";
recipe[5]="get delivery";

var lastStep = recipe.length-1;
console.log(lastStep);

console.log(recipe[lastStep]);
//2
var arr = ["stuff1", "stuff2","stuff3"];
console.log(arr.length);
arr.push("one more at the end");
console.log(arr[arr.length -1]);
console.log(arr[3]);

var holder =arr.pop();

console.log("var of what i popped "+ holder);
console.log("new last spot " +arr[arr.length -1]);

arr.unshift("stuff0");
arr.unshift("stuff -1");
console.log(arr.length);

console.log(arr[0]);

var formerFirst = arr.shift();
console.log(arr.length); // should be one less

console.log(formerFirst); //should be stuff -1
console.log(arr[0]); // should be stuff 0

function logArray(myArray){
  for (var a=0; a<myArray.length; a++){
    console.log("spot " + (a+1) + "is " + myArray[a]);
  }
}

logArray(arr);
//exc 4
function reverser(oA){
  var reversed = [];
  for(var b=0; b<oA.length;b++){
    reversed[b]=oA[(oA.length-1)-b];
  }
  return reversed;
}

var oppRecipe = reverser(recipe);
logArray(oppRecipe);

//5 biggest smallest

function bigSmall(array){
  var low = array[0];
  var high = array[0];
  for (var hCount=1; hCount<array.length;hCount++){
    if(array[hCount]> high){
      high = array[hCount];
    }
  }
  for (var lCount=1; lCount<array.length;lCount++){
      if(array[lCount]< low){
        low = array[lCount];
      }
    }
  var newArray =[low, high];
  return newArray;
  }

var testArray =[4,52,-3,400,444,-50];

console.log(bigSmall(testArray));

// exc 6
function arrDupe (input){
  var output=[];
  output = input.slice();
  return output;
}

var orig = [1,2,3,4];

var copy = arrDupe(orig);

orig.pop();
orig.unshift(500);

logArray(orig);
logArray(copy);

// I need to add all these handy array things to my JSnotes
//7

function arrCombine (arr1, arr2){
  var newArr= arr1.concat(arr2);
  return newArr;
}
console.log(arrCombine(orig, copy));

//8

function arrPluck(arr, spot){
return arr.splice(spot, 1)
}

console.log(recipe);
console.log(arrPluck(recipe,2));
console.log(recipe);

//9
var words = ["doubtful", "definitely", "hell no","it's unclear"];

//prompt("Ask the 8-ball something...");

function eightBall(){
  console.log (words[Math.floor((Math.random() * (words.length)))]);
}
for (var i=0;i<10;i++){
  eightBall();

}
//10.1 check if hello is in
function checkHello(arr){
  for(var m=0;m<arr.length;m++){
      if(arr[m]==="hello")
      {
        return true;
      }
    }
    return false;
}

console.log(checkHello(recipe));
recipe.push("hello");
console.log(checkHello(recipe));


//10.2 count how many times a string appears in an array
function countStuff(arr,targetString){
  var count = 0;
  for(var m=0;m<arr.length;m++){
      if(arr[m]===targetString)
      {
        count++;
      }
    }
    return count;
}

console.log(countStuff(recipe,"hello"));
recipe.push("hello");
console.log(countStuff(recipe,"hello"));

//10.3 create new array with only odd spots
function oddArray(arr){
  var odd =[];
  for(var z=0;z<arr.length;z++){
      if(z%2!==0)
      {
        odd.push(arr[z]);
      }
    }
    return odd;
}
console.log(recipe);
console.log(oddArray(recipe));

//10.4 add up a number array
function sumArray(arr){
  var sum = 0;
  for(var z=0;z<arr.length;z++){
      sum+=arr[z];
    }
    return sum;
}

var batman =[1,2,3,4,5,6];
console.log("add array " + sumArray(batman));

//10.5

function arrayMath(arrayNums, operation){
  var total =0;
  switch(operation){
    case "multiply":
        total = arrayNums[0]*arrayNums[1];
        for(var e=2;e<arrayNums.length;e++){
        total = total*arrayNums[e];
      }
      return total;
      break;
    case "divide":
      total = arrayNums[0]/arrayNums[1];
      for(var f=2;f<arrayNums.length;f++){
      total = total/arrayNums[f];
    }
      return total;
      break;
    case "add":
      for(var g=0; g<arrayNums.length;g++){
        total+=arrayNums[g];
      }
      return total;
       break;
    case "subtract":
      total = arrayNums[0]-arrayNums[1];
    for(var g=2; g<arrayNums.length;g++){
      total = total -arrayNums[g];
    }
      return total;
      break;
  }
}

console.log(arrayMath(batman,"multiply"));
console.log(arrayMath(batman,"divide"));
console.log(arrayMath(batman,"add"));
console.log(arrayMath(batman,"subtract"));

// 10.6 zipper HOLYCRAP

//var list = arrName.join(", ");// will join the elements of an array together and add what's between the quotes
//var arrayThing = stringName.split ("/");// will separate a string into separate elements of an array, by the delimiter, which is the thing between quotes

//Array.isArray(arrayName); will evaluate to true if it's an array
//type of (arrayName); //will evaluate to object

//MESS!
/*
function zipper(array1, array2){
  if(array1.length>=array2.length){
    var longArr = 1;
    var longLength= array1.length;
  }
  else{
    var longArr=2;
    var longLength = array2.length;
  }
  var newLength = array1.length + array2.length;

  combinedArray=[];
  longSpot = 0;
  shortSpot=0;
  longLength= longArr.length;
  shortLength = shortArr.length;
  for(var indCount=0; indCount<=(2*shortLength);indCount++){
    if(indCount%2===0){
    combinedArray[indCount]=longArr[longSpot];
    longSpot++;
    }
    else{
      combinedArray[indCount]=shortArr[shortSpot];
      shortSpot++;
    }
      }
  for (var singCount = (2*shortLength-1); singCount< ((2*shortLength)+(longLength-shortLength)); singCount++){
    combinedArray[singCount]=longArr[longSpot];
    longSpot++;
  }
return combinedArray;
    }



    var one = [1,2,3,4,5];
    var two = ["a","b","c"];


console.log(one);
console.log(two);
var three = zipper(one,two);
console.log(three);

// doesn't quite work
//[1, 3, 5, 7, 9]
//[2, 4, 6, 8, 10, 12, 14]
//[2, 1, 4, 3, 6, 5, 8, 7, 10, 12, 14]
*/
///another ZIPPER try
// Uh, yeah, I'm awesome.

function zipper2(array1, array2){
  var combinedArray=[];
  if(array1.length>array2.length){
    var shortLength = array2.length;
    var diff=array1.length-array2.length;
  }
  else if (array2.length>array1.length){
    var shortLength = array1.length;
    var diff=array2.length-array1.length;
  }
  else{
    var shortLength = array1.length;
    diff=0;
  }
  for(var i=0;i<shortLength;i++){
    combinedArray[i*2]=array1[i];
  }
  var x=0;
  for(var j=1; j<(2*shortLength);j+=2){
    combinedArray[j]=array2[x];
    x++;
  }
  if (diff===0){
    return combinedArray;
  }
  else if(array1.length>array2.length){
    var longTracker =shortLength;
    for (var y=shortLength*2; y<((shortLength*2)+diff); y++){
      combinedArray[y]= array1[longTracker];
      longTracker++;
    }
    return combinedArray;
}
  else{
    var longTracker =shortLength;
    for (var y=shortLength*2; y<((shortLength*2)+diff); y++){
      combinedArray[y]= array2[longTracker];
      longTracker++;
    }
    return combinedArray;
  }
  }

var one2 = [1,2,3];
var two2 = ["a","b","c","d","e"];
var three = ["a","b","c"];

console.log(zipper2(one2,two2));
console.log(zipper2(two2,one2));
console.log(zipper2(one2,three));

// 10.8 merged sorted

function mergedSort(array1,array2){
  fullArray = array1.concat(array2);
  console.log(fullArray);
  var totalL=fullArray.length;
  var sortedArray=[150,25];
console.log(sortedArray[0]);
  var low = fullArray[0];
  var lowSpot=0;
for (var x=0; x<totalL;x++){
  for (var d=0;d<fullArray.length;d++){
    if(fullArray[d]<low){
      low = fullArray[d];
      lowSpot = d;
    }
  }
  console.log(lowSpot,low);
  var currentLow =parseInt(fullArray.splice(lowSpot,1));
  console.log("varcheck"+ currentLow);
  sortedArray[x]=currentLow;
  console.log(fullArray);
  console.log("arrayspot check" + sortedArray[x]);
  low =fullArray[0];
  lowSpot=0;
}
console.log(sortedArray);
console.log(sortedArray[6]);
console.log(Array.isArray(sortedArray));
return sortedArray;
}

var arrayA =[2,3,5,6,11];
var arrayB =[1,60,50];
console.log(arrayA);
console.log(arrayB);

var merged = mergedSort(arrayA, arrayB);
console.log(merged);
//FUCK HAD TO USE PARSEINT!

function shuffle(array){
  var shuffledArray=[];
  var totalLENG = array.length;
  for (var b=0; b<totalLENG;b++)
  {
    var num =Math.random()*array.length;
    shuffledArray[b]= parseInt(array.splice(num,1));
  }
  return shuffledArray;
}
var shufARR = shuffle(merged);
console.log(shufARR);
var shufARR = shuffle(shufARR);
console.log(shufARR);
var shufARR = shuffle(shufARR);
console.log(shufARR);



// passing by value using .slice
var arr = [ ['hello', 'and', 'hi'], [2,3,4] ];
arr2 = arr.slice();
arr2[1].push(44);
arr[0] = "new value";

// ?
console.log(arr[0],arr[1]);
console.log(arr2[0],arr2[1]);
