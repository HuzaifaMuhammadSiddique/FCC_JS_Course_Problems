// PROBLEM
/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

// SOLUTION
function binaryAgent(str) {
  const binaryCodes = {
  "01000001": "A",
  "01000110": "F",
  "01000011": "C",
  "01001001": "I",
  "01110010": "r",
  "01100101": "e",
  "01110100": "t",
  "01100010": "b",
  "01101111": "o",
  "01101001": "i",
  "01110011": "s",
  "01100110": "f",
  "01110101": "u",
  "01101110": "n",
  "01101100": "l",
  "01110110": "v",
  "01100100": "d",
  "01100001": "a",
  "01101101": "m",
  "01110000": "p",
  "00100000": " ",
  "00100111": "'",
  "00100001": "!",
  "00111111": "?"
}

  let inputArray = str.split(" ") 
  let result = [];

  for(let code of inputArray){
    result.push(binaryCodes[code])
  }
  result = result.join("")

  return result;
}

// TESTS
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))
