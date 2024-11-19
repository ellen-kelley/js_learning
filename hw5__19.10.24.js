var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");

var res;
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
