// Problem
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
*/

// Solution
function destroyer(arr) {
  
  let args = Object.values(arguments);
  args.shift();
  
  
  for(let n of args){
    if(arr.includes(n)){
      arr = arr.filter(function f(value){
        return value !== n
      })
    }
  }
  return arr;
}

// Tests
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
