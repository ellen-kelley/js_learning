const arr = [10, 20, 30, 40];
const arr2 = ["JS", "React"];

Array.prototype.customForEach = function (callback) {};

arr.customForEach((item, index, arr) => {
	console.log(item, index, arr);
});






// forEach
// map
// filter
// find
// indexOf
// includes
// reverse
// new keyword