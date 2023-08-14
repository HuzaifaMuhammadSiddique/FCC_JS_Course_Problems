// PROBLEM
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

// SOLUTION
function convertHTML(str) {
  let finalStr = "";
  for(let i=0; i<str.length; i++){
    if(str[i] === "&"){
      finalStr = finalStr.concat("&amp;")
    } else if(str[i] === "<"){
      finalStr = finalStr.concat("&lt;")
    } else if(str[i] === ">"){
      finalStr = finalStr.concat("&gt;")
    } else if(str[i] === '"'){
      finalStr = finalStr.concat("&quot;")
    } else if(str[i] === "'"){
      finalStr = finalStr.concat("&apos;")
    } else{
      finalStr = finalStr.concat(str[i])
    }
  }

  return finalStr;
}

// TESTS
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
