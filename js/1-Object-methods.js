var myDog = {
	weight: 5,
	name: 'meow',
	age: 1,
	bark: function () {
		// body...
		console.log("meow meow, my name is", this.name);
	},
	eat: function (bone) {
		// body...
		this.weight = this.weight + bone.weight;
		return this;
	}
};
//function bark() {
// 	// body...
// 	console.log("meow meow, my name is", this.name);
// }

// bark();

var bone = {weight: 0.5};
console.log("Before eating", myDog.weight);

myDog.eat(bone);
console.log("After eating", myDog.weight);

// myDog.bark();

// function bark() {
// 	// body...
// 	console.log("meow meow, my name is", this.name);
// }

// bark();

var rectangle = {
	width: Number,
	height: Number,
	getWidth: function () {
		// body...
		console.log(this.width)
	},
	getHeight: function () {
		// body...
		console.log(this.height)
	},
	getArea: function (area) {
		// body...
		this.area = area.width *area.height
	}
};