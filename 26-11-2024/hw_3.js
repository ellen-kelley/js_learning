// Problem 3: Longest Text
// Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
// Write a program to find the longest word in the array.
// Solution in JavaScript using only for loop and arrays:

const arr = ["React", "JavaScript", "Redux", "PHP", "C#"];
let longestWord = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i].length > longestWord.length) {
    longestWord = arr[i];
  }
}

console.log(longestWord);
