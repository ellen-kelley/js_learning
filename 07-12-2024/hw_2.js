// Problem 1: Number of Days in a Month
// Write a function that takes the name of a month as an argument and returns the number of days in that month.
// Requirements:
// Use switch...case to determine the number of days in the month.
// If the argument does not match any valid month, return “Invalid month”.
// Use if...else to check if the current year is a leap year (February should have 29 days in a leap year).

function daysInMonth(month) {
	const currentYear = new Date().getFullYear();
	let days;

	switch (month) {
		case "january":
		case "march":
		case "may":
		case "july":
		case "august":
		case "october":
		case "december":
			days = 31;
			break;

		case "april":
		case "june":
		case "september":
		case "november":
			days = 30;
			break;

		case "february":
			days = currentYear % 4 === 0 ? 29 : 28;
			break;

		default:
			return "Invalid month";
	}
	return days;
}

console.log(daysInMonth("march"))