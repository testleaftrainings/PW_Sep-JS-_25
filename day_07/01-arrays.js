let x= "10";

/* Arrays in JavaScript

1. Dynamic in size :
Arrays in JS grows and shrinks in size as elements are added and removed.

2. Heterogenous elements :
Arrays can store different datatypes like numbers, strings , objects...
*/

//Using Array literal : --> The arrays are stored in one single memory location.

// let alpha = ["a","b","c","d"] // //-->stored in a new memory location --> 99
alpha = ["a","b","c","d"]
// let alpha1 = ["a","b","c","d"]//-->//-->stored in a new memory location --> 100

// console.log(alpha===alpha1);// false

// //Using Array Constructor : --> The arrays are stored in different memory location.

// //let alpha3 = new Array(5)// creating empty slots for your array constructor --> 100

// let alpha3 = new Array ("a","b","c","d","e") //-->stored in a new memory location --> 101

// let alpha4 = new Array("a","b","c","d","e")//-->stored in a new memory location --> 102

// console.log(alpha3===alpha4);// false

//1. push -> add or more elment to the end of the array.

let letters = ["a","b","c","d","e"];
letters.push("f","g","h"); //  
/* Output :[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */

// console.log(letters);

//2. pop -> remove only one from the end of the array

letters.pop();
// console.log(letters);

//3.shift --> remove only one element from the first part of the array

letters.shift();
// console.log(letters); // [ 'b', 'c', 'd', 'e', 'f', 'g' ]

//4. unshift --> add one or more elements to the beginning of the array

letters.unshift("x","y","z");
// console.log(letters);
/* Output :
[
  'x', 'y', 'z',
  'b', 'c', 'd',
  'e', 'f', 'g'
] */

//5. slice
//Extracts a section of an array without modifyinh the original array


let letters1 =["a","b","c","d","e"];
/*   Index  , Negative Index
"a" -> 0      ,   -5
"b" -> 1      ,   -4
"c" -> 2     ,    -3
"d" -> 3     ,    -2
"e" -> 4     ,   -1*/
// result = letters1.slice(1,4) // [ 'b', 'c','d' ] => 1 and 2 values are printed the last index is not considered here it is 3
// console.log(result);

result = letters1.slice(-4,-1) // [ 'b', 'c', 'd' ]
// console.log(result);


// //6.splice : --> add or remove the elements from the array
// //array.splice(startIndex, deleteCount, item1, item2)

// letters1.splice(1,2,"x","y")
// console.log(letters1); // output - [ 'a', 'x', 'y', 'd', 'e' ]

// letters1.splice(2,3,"x","y","z")
// console.log(letters1); // output - [ 'a', 'x', 'x', 'y', 'z' ]

// //7.spread syntax(...):

// let numbers1 = [1,2,3,4];
// let numbers2 = [5,6,7,8];

// let spreadArray = [...numbers1,...numbers2];
// console.log(spreadArray); //[1,2,3,4,5,6,7,8]


// //8. concat():

// let mergedConcat = numbers1.concat(numbers2);
// console.log(mergedConcat);// [1,2,3,4,5,6,7,8]


//9.Sorting array:

let numberArray = [10,9,8,7];

numberArray.sort();
console.log(numberArray); // [ 10, 7, 8, 9 ]

numberArray.sort((a,b)=>a-b); //1
console.log(numberArray); // [ 7, 8, 9, 10 ] --> ascending array

numberArray.sort((a,b)=>b-a); //-1
console.log(numberArray); //[ 10, 9, 8, 7 ] --> descending array

/*  (a,b) => {
    result = a-b 
    return result
}
    console.log(diff(10,9)) // Output--> 1*/








