/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


// Your code here 
function lastVowel(str){
  let originalStr = str; // Store the original case of the string
  str = str.toLowerCase();
    let lastVowelFound = null;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        lastVowelFound = originalStr[i];
        break;
      }
    } 
    return lastVowelFound;
  }
    
console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = lastVowel;
  } catch (e) {
    module.exports = null;
  }