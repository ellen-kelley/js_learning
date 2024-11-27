// Implementation of includes() method in JS

const arr = [5, "JavaScript", 7, "PHP", NaN];
const searchValue = NaN;
let res = false;

// With Number.isNan()
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === searchValue || (Number.isNaN(searchValue) && Number.isNaN(arr[i]))) {
		res = true;
		break;
	}
}

// Without Number.isNan()
// !! Contains a bug if array includes nested arrays or objects
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === searchValue || (searchValue !== searchValue && arr[i] !== arr[i])) {
		res = true;
		break;
	}
}

console.log(res);
