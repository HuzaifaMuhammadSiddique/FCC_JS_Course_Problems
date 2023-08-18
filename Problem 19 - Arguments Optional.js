// PROBLEM
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
```
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
```
If either argument isn't a valid number, return undefined.
*/

// SOLUTION
function addTogether(a,b) {
  let noOfArgs = (Object.keys(arguments)).length;
  if(noOfArgs === 1 && typeof(a) === "number"){
    var adder = (c) => {
      if(typeof c === "number"){
      return a + c;
      } else{
      return undefined;
      }
    }
    return adder;
  }

  if(typeof(a) !== "number" || typeof(b) !== "number"){
    return undefined;
  }

  return a + b;
}

// TESTS
console.log(addTogether(2,3));
console.log(addTogether(23, 30));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5));
console.log(addTogether(5)(7));
console.log(addTogether(5)([3]));
console.log(addTogether(2,"3"));
