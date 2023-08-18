// PROBLEM
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects.
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
*/

// SOLUTION
function truthCheck(collection, pre) {
  function mapper(obj){
    if(obj[pre] === true){
      return true;
    } else if(isNaN(obj[pre]) && typeof(obj[pre]) === typeof(1)){
      return false
    } else if(obj[pre] === 0){
      return false
    }
    else if(typeof(obj[pre]) === typeof(1) && obj[pre] !== NaN){
      return true;
    } else if(typeof(obj[pre]) === typeof("a") && obj[pre] !== ""){
      return true;
    } else if(obj[pre] === null){
      return false
    } else if(typeof(obj[pre]) === typeof({})){
      return true
    }
    else{
      return false;
    }
  }

  let fList = collection.map(mapper);
  console.log(fList);
if(fList.includes(false)){
  return false;
} else{
  return true;
}

}

// TESTS
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") );

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"));

console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"));

console.log(truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username"));

console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"));

console.log(truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data"));

console.log(truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"));

console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught"));

console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"));
