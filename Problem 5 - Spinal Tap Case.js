// ONE OF THE HARDEST PROBLEM I HAVE EVER DONE!

// Problem
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// Solution
function spinalCase(str) {
  // str = str.toLowerCase();
  // str = str.split(/[ \,-_]/)
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",  "u", "v", "w", "x", "y", "z"];
  let capitals = [  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",  "U", "V", "W", "X", "Y", "Z"];

  let array = [];
  let space = " ";
  let dash = "-";
  let underscore = "_";
  let empty = "";

  for(let i=0; i<str.length; i++){
    if(i === 0){
      array.push(str[i].toLowerCase())
    } else if(letters.includes(str[i])){
      array.push(str[i])
    } else if(str[i] === space || str[i] === underscore){
      array.push(dash);
    } else if(capitals.includes(str[i]) && !(letters.includes(str[i-1]))){
      array.push(str[i].toLowerCase())
    }  else if (str[i] === dash){
        array.push(str[i]);
      } else if(capitals.includes(str[i]) && (str[i-1] !== space)){
      if(str[i-1] !== underscore){
      array.push(dash);
      array.push(str[i].toLowerCase())
      }
    } 
  }

array = array.join("")
  return array;
}

// TESTS
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
