/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
  // your code here
  var maxNumber = arr[0];
  for(let i = 0; i < arr.length; i++){
  	if(arr[i] > maxNumber){
  		maxNumber = arr[i];
  	};
  };

  return maxNumber;
};

console.log(max([1, 2, 3, 10]));
///////////////////////////////////////////////////
/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
  // your code here!
  if(x) return true;
  return false

};

console.log(isTruthy(0));
/////////////////////////////////////
/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
  // your code here!
  if(score >= 0 && score < 5)
  	return "C";
  else if (score >= 5 && score < 7)
  	return "B";
  return "A";
};

console.log(grade(10));