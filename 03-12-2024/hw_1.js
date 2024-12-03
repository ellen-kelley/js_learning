// Problem 1:  Find Common Characters Between Two Strings
// Description: Write a program that checks how many characters are common between two strings, without using new Set, and  function.

// The strings "react" and "redux" share the characters 'r' and 'e'
// Expected Output
// 2

const str1 = "react";
const str2 = "redux";
let commonCount = 0;
let checkedChars = "";

// I'm using many nested loops because of the checkedChars string that was given in the problem.
// Otherwise, it would be more efficint to track checked characters in an object.
for (let i = 0; i < str1.length; i++) {
	if (!checkedChars.includes(str1[i])) {
		for (let j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				commonCount++;
				break;
			}
		}
		checkedChars += str1[i];
	}
}

console.log(commonCount);
