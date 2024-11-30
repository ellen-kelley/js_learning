// Problem 2: Car Speeds
// Description:
// You are given an array of cars, where each car has a model and speed (in km/h). Your task is to identify which cars are exceeding 120 km/h and which are safe (≤120 km/h). Store the safe cars and speeding cars in separate arrays. Use a for loop and a if else statement.

const cars = [
	{ model: "Toyota", speed: 100 },
	{ model: "BMW", speed: 150 },
	{ model: "Lada", speed: 80 },
	{ model: "Audi", speed: 130 },
	{ model: "Mercedes-Benz", speed: 260 },
];

const safeCars = [];
const speedingCars = [];

for (let i = 0; i < cars.length; i++) {
	const { model, speed } = cars[i];
	if (speed <= 120) {
		safeCars.push({ model, speed });
	} else {
		speedingCars.push({ model, speed });
	}
}

console.log(safeCars);
console.log(speedingCars);
