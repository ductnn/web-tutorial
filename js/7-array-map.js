// array map

var numbers = [1, 2, 3, 4];
var squareNumbers = numbers.map((x) => {
	return x*x;
});
////////////////////////////////////////////

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */
 function tripple(num) {
 	// body...
 	return num*3;
 };

 function multiply(numbers) {
 	// body...
 	return numbers.map((num) => tripple(num));
 };
/////////////////////////////////////////////

// Use array map make an array of strings of the names
var users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

function namesOnly(arr) {
  // Write code here...
  return arr.map((user) => user.name);
};

function readyToPutInTheDOM(arr) {
	// body...
	return arr.map((user) => {
		'<h1>' + user.name + '</h1>',
		'<h2>' + user.age + '</h2>'
	});
};

 console.log(namesOnly(users));
 console.log(readyToPutInTheDOM(users));