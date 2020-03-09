//The `new` key
/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

var student = {
	name: "Ductn",
	id: 0,
	age: 1
};

function showInfo(obj) {
  // viết code ở đây
  for(var key in obj){
  	return obj[key];
  };
};
////////////////////////////////////////////////////////////
/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
  // chỉ viết code ở dưới dòng này.
  	for(var key in student){
  		if(key == prop)
  			delete student[key];		
  	};
  	return student;
  	console.log(removeProp("name"));
};

console.log(removeProp("name"));
/////////////////////////////////////////////////////////////
/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
  // viết code ở đây
  var count = 0;
  for(var key in obj){
  	if(obj[key])
  		count++;
  };
  return count;
};

var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12
};
///////////////////////////////////////////////////////////
/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
  // Your code here
  this.color = color;
  this.shape = shape;
  this.fill = fill;
};

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);
