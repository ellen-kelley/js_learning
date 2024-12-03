// Problem 1:  Find Common Characters Between Two Strings
// Description: Write a program that checks how many characters are common between two strings, without using new Set, and  function.

// The strings "react" and "redux" share the characters 'r' and 'e'
// Expected Output
// 2

const str1 = "react";
const str2 = "redux";
let commonCount = 0;
let checkedChars = "";

function checkChars(str1, str2) {
	let count = 0;
	for (let i = 0; i < str1.length; i++) {
		let char = str1[i];
		console.log(char, ">>>>");
		if (str2.includes(char)) {
			count++;
		}
	}
	console.log(count);
}

checkChars("react", "redux");