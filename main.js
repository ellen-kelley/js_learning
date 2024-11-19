var firstName = prompt("Input your First Name")
var lastName = prompt("Input your Last Name")
var age = prompt("Input your age")


// var message = "Hello " + firstName + ", welcome to my website!"
// var message = `Hello  ${firstName} ${lastName}, welcome to my website!`


// console.log(message);

if (firstName && lastName) {
    alert(`Hello  ${firstName} ${lastName}, welcome to the website!`)
    if (age>=18) {
        const user = {
            fullname: `${firstName} ${lastName}`,
            age
        }
    } else {
        console.log("Wrong data.");
    }

    console.table(user)
} else {
    alert("Fill out empty fields or correct info!")
}