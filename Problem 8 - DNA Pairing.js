// PROBLEM
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element.
Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.
Return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

// SOLUTION
function pairElement(str) {
  var globalArray =[];
  for(let i=0; i<str.length; i++){
    if(str[i] === 'A'){
      let arr = [];
      arr.push(str[i]);
      arr.push('T');
      globalArray.push(arr);

    }else if(str[i] === 'T'){
      let arr = [];
      arr.push(str[i]);
      arr.push('A');
      globalArray.push(arr);

    }else if(str[i] === 'C'){
      let arr = [];
      arr.push(str[i]);
      arr.push('G');
      globalArray.push(arr);

    }else if(str[i] === 'G'){
      let arr = [];
      arr.push(str[i]);
      arr.push('C');
      globalArray.push(arr);

    }
  }
  return globalArray;
}

// TESTS
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
