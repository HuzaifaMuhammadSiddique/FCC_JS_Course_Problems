// Problem
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

// Solution
function diffArray(arr1, arr2) {
  const newArr = [];
  for(let element of arr1){
    if(arr2.includes(element)){

    } else{
      newArr.push(element)
    }
  }

  for(let element of arr2){
    if(arr1.includes(element)){

    } else{
      newArr.push(element)
    }
  }
  return newArr;
}


// Tests
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
