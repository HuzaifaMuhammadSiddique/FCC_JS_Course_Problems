// Problem
/*
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

// Solution
function sumAll(arr) {
  function sorter(a, b){
    return a - b;
  }
  let array = [...arr];
  array.sort(sorter);

  let sum = 0;
  for(let i=array[0]; i<=array[1]; i++){
    sum += i;
  }
  return sum;
}

// Tests
sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
