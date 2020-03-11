var age = 19;
var canDrive;

// Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
/**
 * if (age > 16) {
 *  canDrive = true;
 * } else {
 *  canDrive = false;
 * }
 * 
 * @param {number} age;
 * @return {boolean} canDrive;
 */

function checkCanDrive(age) { 
  // Viết lại ở đây
  var result = (age > 16) ? true : false;
  return result;
};

console.log(checkCanDrive(16));
console.log(checkCanDrive(17));
////////////////////////////////////////////////////
// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
	return (a > 0 ) ? 1
		: (a < 0 ) ? 2
		: 3;
};

console.log(doSomethingTernary(0));
