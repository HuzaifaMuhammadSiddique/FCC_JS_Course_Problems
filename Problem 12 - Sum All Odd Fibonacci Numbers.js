// PROBLEM
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


// SOLUTION
function sumFibs(num){
    let sequence = [0, 1];
    var len = sequence.length;
    while(sequence[len - 1] < num){
        len = sequence.length;
        let number = sequence[len - 1] + sequence[len - 2];
        sequence.push(number);
    }
    let sum = 0;
    for(let n of sequence){
    if(n <= num && n % 2 !== 0){
      sum = sum + n;
    }
  }
    return sum;
}

// TESTS
console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(1));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
