// indexOf implementation

// const arr = [1, 3, 4, "Hello", 6];
// const searchValue = 6;
// let findIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === searchValue) {
//     findIndex = i;
//     break;
//   }
// }

// console.log(findIndex);



// Find missing numbers in the array range 

const arr = [9, 2, 7, 4]; // 3, 5, 6, 8
const res = [];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}

for (let i = min + 1; i < max; i++) {
  if (!arr.includes(i)) {
    res.push(i);
  }
}

console.log(min);
console.log(max);
console.log(res)


