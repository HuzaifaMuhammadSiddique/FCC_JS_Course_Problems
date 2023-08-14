// PROBLEM
/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

// SOLUTION
function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  if(vowels.includes(str[0])){
    str = str.concat("way");
  } else{
    var isVowel = false;
    var cons = "";
    var i = 0;
    var remaining = str.split("");

    while(isVowel === false && i < str.length){
      cons = cons.concat(str[i]);
      remaining.shift();
      i++;
      if(vowels.includes(str[i])){
      isVowel = true;
      } else{
      isVowel = false;
      }
    }
  remaining = remaining.join("");
  str = remaining.concat(cons, "ay");
  }
    return str;
}

// TESTS
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove") );
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"))

