// PROBLEM
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

// SOLUTION
function smallestCommons(arr) {
  let first = arr[0];
  let last = arr[1];
  let numbers = [];

  if(first>last){
    let t = first;
    first = last;
    last = t;
  }

  for(let i=first; i<=last; i++){
    numbers.push(i)
  }

  function gcd(a,b){  // 20,5
    if(b<a){
      let temp = b;
      b = a;
      a = temp;
    }
    while(b !== 0){
        let anotherTemp = b; // 5
        b = a % b; // 0
        a = anotherTemp // 5
    }
    return a
  }

  function lcm(a,b){
    return (a*b) / gcd(a,b)
  }

  function lcmArray(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    return result;
}


  return lcmArray(numbers);
}

// TESTS
console.log(smallestCommons([1,5]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([2,10]));
console.log(smallestCommons([1,13]));
console.log(smallestCommons([23,18]));
