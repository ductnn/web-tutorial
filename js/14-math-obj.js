// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  // your code here!
  return arr.map((item) => {
  	if(item % 2 == 0)
  		return Math.pow(item, 2);
  	else return item;
  });
};

console.log(powerup([4, 2, 3]));
///////////////////////////////////
/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  // your code here!
  var total = arr.reduce((a, b) => {
  	return a+b;
  });
  return Math.round(total/arr.length);
};

console.log(average([8, 8, 6.75]));
//////////////////////////////////////////////
/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  // your code here
  return arr.map((item) => {
  	if(item < 0)
  		return Math.abs(item);
  	return item;
  });
};

console.log(positiveNumber([-1, 0, -5, 5]));
////////////////////////////////////////////////////////
// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
  // your code here!
  return Math.random() * 100;
};

console.log(random());
////////////////////////////////////////////////////////////
/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  // your code here
  if(a <= 0 || b <= 0 || c <= 0)
  	return false;
  if(a*a == b*b + c*c || a*a + b*b == c*c || a*a + c*c == b*b) 
  	return true;
  return false;
};

console.log(rightTriangle(3, 4, -5));
////////////////////////////////////////////////////////////////
/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
  // your code here!
  return Math.round(3.14*2*r);
};

function acreageOfCircle(r) {
  //your code here!
  var area = 3.14 * r * r;
  var areaFix2Number = area.toFixed(2);
  if ((areaFix2Number - area) < 0.0001 )
  	return Number(area.toFixed(2));
  else return area;
};

console.log(acreageOfCircle(3));
////////////////////////////////////////////////////////////
/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  var arr = [];
  var sinN = Math.sin(number);
  var cosN = Math.cos(number);
  var tanN = Math.tan(number);
  arr.push(sinN.toFixed(3), cosN.toFixed(3), tanN.toFixed(3));
  return arr;
};

console.log(trigonim(45));
