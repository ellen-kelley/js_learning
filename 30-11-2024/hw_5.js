// Problem 3: Employee Departments
// Description:
// You are given an array of employees, where each employee has a name and a department. Your task is to determine how many employees work in each department.

const employees = [
	{ name: "Karen", department: "HR" },
	{ name: "John", department: "IT" },
	{ name: "Margarita", department: "HR" },
	{ name: "Aram", department: "Finance" },
	{ name: "Nina", department: "IT" },
];

const departmentCount = {};

for (let i = 0; i < employees.length; i++) {
	const { department } = employees[i];
	if (!departmentCount[department]) {
		departmentCount[department] = 1;
	} else {
		departmentCount[department]++;
	}
}

console.log(departmentCount);