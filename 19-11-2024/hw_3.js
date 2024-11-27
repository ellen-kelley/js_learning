// Month Check
// Write a program that takes the number of a month (1-12) and prints which season it belongs to:
// 12, 1, 2 -> “Winter”
// 3, 4, 5 -> “Spring”
// 6, 7, 8 -> “Summer”
// 9, 10, 11 -> “Autumn”

let month = +prompt("Enter the month (1-12):");

if (month === 12 || month === 1 || month === 2) {
	res = "Winter";
} else if (month === 3 || month === 4 || month === 5) {
	res = "Spring";
} else if (month === 6 || month === 7 || month === 8) {
	res = "Summer";
} else if (month === 9 || month === 10 || month === 11) {
	res = "Autumn";
} else {
	res = "Invalid input data.";
}
console.log(res);
