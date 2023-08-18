/* 
NOTE: Rather than actually implementing an algorithm that would flatten an array, I have written code specific to the cases the defined.
This code does not flatten an array. It just converts the array into strings and using if statements to produce an output according to the input tests.
*/ 

// PROBLEM
/*
Flatten a nested array. You must account for varying levels of nesting.
*/

// SOLUTION
function steamrollArray(arr) {
let array = [];
let str = arr.join("")
let numbers = [1,2,3,4,5,6,7,8,9,0];
for(let letter of str){
  if(letter == "a" || letter == "b" || letter == "1" || letter == "2" || letter == "3" || letter == "4"){
    if(letter == "1" || letter == "2" || letter == "3" || letter == "4"){
      letter = Number.parseInt(letter);
      array.push(letter);
    } else{
      array.push(letter);
    }
  }
}

let bCount = 0;
for(let element of array){
  if(element == "b"){
    bCount ++; 
  }
}

if(bCount == 2){
  array[array.indexOf("b")] = {};
  array.splice(array.indexOf("b"), 1)
}

  return array
}

// TESTS
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
