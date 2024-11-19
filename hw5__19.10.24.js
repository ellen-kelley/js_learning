var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");

switch (operation) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error: Cannot divide by zero.");
        }
        break;
    default:
        console.log("Invalid operation.");
}