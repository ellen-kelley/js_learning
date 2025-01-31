// 1 step -------------
// const obj = {
//     firstName: 'John', //property
//     lastName: 'Smith',
//     getFullName: function() {
//         console.log(`Hello Dear ${this.firstName} ${this.lastName}`);
//     }
// }

// obj.getFullName();

// -----------------

// 2 step -------------

// function getUserLocation() {
//     return this.location;
// }

// const x = {
//     location: '47387748373'
// }

// const y = {
//     location: '17832547548'
// }

// x.getLocation = getUserLocation;
// y.getLocation = getUserLocation;

// console.log(x.getLocation(), 'x location');
// console.log(y.getLocation(), 'y location'); // .- ի
// -----------------

// 3 step -------------
// const obj = {
//     x: 10,
//     y: 20,
//     foo() {
//         console.log(this.x);
//     }
// }

// const boo = obj.foo;
// obj.foo(); //this
// boo(); //

// -----------------

// 4 step -------------

// window.firstName = 'Dav';
// window.lastName = 'Sargsyan';
// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     allowMessage: function() {
//         const _this = this;
//         setTimeout(function() {
//             console.log(this);
//             alert(`Welcome ${_this.firstName} ${_this.lastName}`)
//         }, 1000);
//     }
// }

// user.allowMessage();

// -----------------

// 5 step -------------

// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     allowMessage: function() {
//         setTimeout(() => {
//             alert(`Welcome ${this.firstName} ${this.lastName}`)
//         }, 1000);
//     }
// }

// user.allowMessage();

// -----------------

// 6 step -------------
// const obj1 = {
//     x: 10,
// }

// const obj2 = {
//     y: 20,
//     __proto__: obj1
// }

// const obj3 = {
//     z: 30,
//     __proto__: obj2
// }

// obj3.x = 1000;
// console.log(obj3.x);

// -----------------

//  7 step -------------

// const arr = new Array();

// const arr1 = []; //__proto__ = Array.prototype;
// const arr2 = []; //__proto__ = Array.prototype;
// const arr3 = []; //__proto__ = Array.prototype;

// -----------------

//  8 step -------------

// function Animal(weight, color, type) {
// 	this.weight = weight;
// 	this.color = color;
// 	this.type = type;
// }

// Animal.prototype.run = function (speed) {
// 	return `The ${this.type} runs at ${speed} speed`;
// };

// const obj1 = {
// 	x: 10,
// };

// function customNew(Constructor, weight, color, type) {
// 	const emptyObject = Object.create(Constructor.prototype);
//     Constructor.call(emptyObject, weight, color, type)
// 	return emptyObject;
// }

// const dog = customNew(Animal, "50kg", "black", "dog");

// console.log(dog.run());

//----------------

// function foo() {
// 	console.log(this.x);
// }

// const obj1 = {
	
// };

// foo.call(obj1);


//-----------

// function customNew() {}

// function foo() {
// 	console.log(this.x);
// }

// foo.call(obj1);

// const myCustomObject1 = {
// 	x: 10,
// 	y: 20,
// };

// const myCustomObject2 = {
// 	x: 30,
// 	у: 50,
// 	getObjectValues: function () {
// 		const result = [];
// 		for (let i in this) {
// 			result.push(this[i]);
// 		}
// 		return result;
// 	},
// };

// myCustomObject2.getObjectValues(); //[30,50]

// console.log(myCustomObject2.getObjectValues())

// const obj1 = {
// 	x: 10,
// };

// const obj2 = {
// 	x: 20,
// };

// obj1.myFoo = foo;
// obj2.myFoo = foo;

// obj1.myFoo();

// const dog = new Animal('50kg', 'black', 'dog'); //{weight: '50kg', color: 'black', type: 'dog'}
// const cat = new Animal('10kg', 'gray', 'cat'); //{weight: '10kg', color: 'gray', type: 'cat'}

// console.log(dog.run(20));
// console.log(cat.run(10));

// -----------------

// implement new keyword
// learn bind call apply
// class vs function
// TypeScript
