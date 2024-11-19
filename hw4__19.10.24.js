var day = prompt("Enter day of the week:").toLowerCase();
var res;
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

console.log(res)