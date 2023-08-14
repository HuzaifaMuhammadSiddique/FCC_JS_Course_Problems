// PROBLEM
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

// SOLUTION
function myReplace(str, before, after) {
  var smallLetters = [  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",  "u", "v", "w", "x", "y", "z"];
  var bigLetters = [  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",  "U", "V", "W", "X", "Y", "Z"];
  
  var search = before;
    function f(word){
      if(word !== search){
        return word;
      }
    }

  if(smallLetters.includes(before[0])){
      after = after.toLowerCase()
  } else if(bigLetters.includes(before[0])){
    var anotherString = after[0].toUpperCase();
    after = anotherString.concat(after.slice(1))
  }
  
  let array = str.split(" ");
  var index = array.indexOf(before);
  let founded = array.filter(f)
  founded.splice(index, 0, after)

  str = founded.join(" ");

  return str;
}

// TESTS
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
