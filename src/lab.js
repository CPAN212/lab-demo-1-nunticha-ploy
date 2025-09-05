// Write a function that takes an array and returns a new array with the elements reversed.
// Example:
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
function reverseArray(arr) {
  // Write you solution here
  let numbers = [1, 2, 3, 4];
  let reverseNumber = numbers.reverse();

  return reverseNumber;
}

reverseArray();

// Write a function that removes duplicate numbers from an array and returns a new array with only unique values.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
  // Write you solution here
}

// Write a function that sorts an array of numbers in ascending order (smallest to largest).
// Example:
// Input: [5, 2, 9, 1, 5, 6]
// Output: [1, 2, 5, 5, 6, 9]
function sortArray(arr) {
  // Write you solution here
}

// You have a synchronous function that returns a greeting message with your name.
// Your task is to convert it into an asynchronous function that returns a Promise,
function syncGreet(name) {
  return `Hello, ${name}!`;
}

function asyncGreet(name) {
  // Write you solution here
}

module.exports = {
  reverseArray,
  removeDuplicates,
  sortArray,
  asyncGreet,
};
