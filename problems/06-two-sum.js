/*
Write a function `twoSum(arr, target)` that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the `target` value. You can assume that input
array contains only unique numbers.
*/

// Your code here 
function twoSum(arr, target) {
  // Create an empty object to store the numbers as keys for constant time lookup
  let numMap = {};

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
      // Calculate the difference between the target and the current number
      let difference = target - arr[i];
      
      // If the difference exists in the numMap, return true
      if (numMap[difference]) {
          return true;
      }
      
      // Otherwise, store the current number in the numMap
      numMap[arr[i]] = true;
  }

  // If no pair is found, return false
  return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoSum;
  } catch (e) {
    module.exports = null;
  }