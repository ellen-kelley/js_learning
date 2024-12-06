// Problem 2: Swap Keys and Values of an Object
// Write a function that takes an object and returns a new object where the keys and values are swapped.

const obj = { a: "1", b: "2", c: "3" };

const swapped = swapKeysAndValues(obj);

function swapKeysAndValues(obj) {
	const res = {};
	const keys = Object.keys(obj);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = obj[key];
		res[value] = key;
	}
	return res;
}

console.log(swapped)