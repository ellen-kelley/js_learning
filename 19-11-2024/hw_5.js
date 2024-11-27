// Calculator
// The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
// Input: 5, 3, "+"Output: 8

let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let operation = prompt("Choose the operation (+, -, *, /):");

let res;
switch (operation) {
	case "+":
		res = num1 + num2;
		break;
	case "-":
		res = num1 - num2;
		break;
	case "*":
		res = num1 * num2;
		break;
	case "/":
		if (num2 !== 0) {
			res = num1 / num2;
		} else {
			res = "Error: Cannot divide by zero.";
		}
		break;
	default:
		res = "Invalid operation.";
}

console.log(res);
