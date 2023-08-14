// PROBLEM
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

// SOLUTION
function fearNotLetter(str) {
  let full = "abcdefghijklmnopqrstuvwxyz";
  let startIndex = full.indexOf(str[0]); // 18 in s
  full = full.split("");
  let relevent = full.splice(startIndex, str.length);
  relevent = relevent.join("");

  for(let i=0; i<str.length; i++){
    if(str[i] === relevent[i]){

    }else{
      return relevent[i]
    }
  }
 
  return undefined;
}

// TESTS
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
