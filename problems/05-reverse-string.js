/*
Write a function `reverseString(str)` that takes in a string. The function
should return a new string where the order of the characters is reversed.
*/

// Your code here 
function reverseString(str) {
  let reversedStr = "";

  // Iterate through the string in reverse order and concatenate each character to reversedStr
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }

  return reversedStr;
}


console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = reverseString;
} catch (e) {
  module.exports = null;
}