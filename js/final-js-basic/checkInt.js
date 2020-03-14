/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(number1, number2) {
  // viết code ở đây.	
  if (number1 > 0 && number2 <0)
  	return true;
  else if(number1 < 0 && number2 > 0)
  	return true;
  return false;
};

console.log(checkInt(6, -2));