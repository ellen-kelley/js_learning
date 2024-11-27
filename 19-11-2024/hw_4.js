// Day Translation
// Create a program that uses a switch-case to translate a day of the week from English to Armenian. The user should input the name of the day in English, and the program should return the corresponding Armenian name.
// Input: “Monday”
// Output: “Երկուշաբթի”

let day = prompt("Enter day of the week:").toLowerCase();
let res;
switch (day) {
	case "Monday":
		res = "Երկուշաբթի";
		break;
	case "Tuesday":
		res = "Երեքշաբթի";
		break;
	case "Wednesday":
		res = "Չորեքշաբթի";
		break;
	case "Thursday":
		res = "Հինգշաբթի";
		break;
	case "Friday":
		res = "Ուրբաթ";
		break;
	case "Saturday":
		res = "Շաբաթ";
		break;
	case "Sunday":
		res = "Կիրակի";
		break;
	default:
		res = "Invalid data.";
}

console.log(res);
