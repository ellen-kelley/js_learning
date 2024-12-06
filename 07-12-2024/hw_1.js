// Transform user data by combining first and last names

const employees = [
	{ firstName: "Karen", lastName: "Sargsyan", department: "HR", salary: 200000 },
	{ firstName: "John", lastName: "Gasparyan", department: "IT", salary: 400000 },
	{ firstName: "Margarita", lastName: "Hovsepyan", department: "HR", salary: 100000 },
	{ firstName: "Aram", lastName: "Manukyan", department: "Finance", salary: 250000 },
	{ firstName: "Nina", lastName: "Grigoryan", department: "IT", salary: 300000 },
];

function transformUjserData(data = []) {
	const result = [];
	for (let i = 0; i < data.length; i++) {
		const { firstName, lastName, ...rest } = data[i];
		result.push({
			fullName: `${firstName} ${lastName}`,
			...rest,
		});
	}
	return result;
}

console.log(transformUjserData(employees));
