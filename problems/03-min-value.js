/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

// Your code here 
function minValue(nums) {
  // Check if the array is empty
  if (nums.length === 0) {
      return null;
  }

  // Initialize minValue with the first number in the array
  let minValue = nums[0];

  // Iterate through the array to find the smallest number
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < minValue) {
          minValue = nums[i];
      }
  }

  return minValue;
}


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = minValue;
  } catch (e) {
    module.exports = null;
  }