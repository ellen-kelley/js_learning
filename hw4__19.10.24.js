var day = prompt("Enter day of the week:");

switch (day) {
    case "Monday":
        console.log("Երկուշաբթի");
        break;
    case "Tuesday":
        console.log("Երեքշաբթի");
        break;
    case "Wednesday":
        console.log("Չորեքշաբթի");
        break;
    case "Thursday":
        console.log("Հինգշաբթի");
        break;
    case "Friday":
        console.log("Ուրբաթ");
        break;
    case "Saturday":
        console.log("Շաբաթ");
        break;
    case "Sunday":
        console.log("Կիրակի");
        break;
    default:
        console.log("Invalid data.");
}