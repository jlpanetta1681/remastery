/*
Write a function `removeLastVowel(word)` that takes in a string and returns the
string with its last vowel removed.
*/

// Your code here 
function removeLastVowel(word){
  let vowels = "aeiouAEIOU";
  let lastVowelIndex = -1;
  
  for(let i = word.length -1; i >= 0; i--){
    if(vowels.includes(word[i])){
      lastVowelIndex = i
      break;
    }
    
  }
  if(lastVowelIndex === -1) 
    return word
  
  const newWord = word.substring(0, lastVowelIndex) + word.substring(lastVowelIndex + 1);
  return newWord
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = removeLastVowel;
  } catch (e) {
    module.exports = null;
}