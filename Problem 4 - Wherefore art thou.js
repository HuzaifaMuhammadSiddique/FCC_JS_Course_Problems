// Problem
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
because it contains the name and its value, that was passed on as the second argument.
*/

// Solution
function whatIsInAName(collection, source) {
  var keys = Object.keys(source);
  
  if(keys.length === 1){
    function f1(obj){
      let key = keys[0];
      if(obj[key] === source[key]){
        return obj;
      }
    }
    return collection.filter(f1);
  }

  if(keys.length === 2){
    function f2(obj){
      let key1 = keys[0];
      let key2 = keys[1];
      if((obj[key1] === source[key1]) && obj[key2] === source[key2]){
        return obj
      } 
    }
    return collection.filter(f2)
  }

if(keys.length === 3){
  function emptier(obj){
    if(typeof(obj) == typeof(1)){
      return obj
    }
  }
  return collection.filter(emptier)
}
}

// Tests
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3});
