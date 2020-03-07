//array find
var numbers = [1, 2, 3, 4];
var findNumbers = numbers.find((number) => {
	return number > 2;
});
//////////////////////////////////////////////

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
	// body...
	return array.find((num) => {
		if(num % 2 === 0)
			return num;
		return undefined;
	});
};
/////////////////////////////////////////////
/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
  // viết code ở đây.
  return array.find((item) => {
  	if(item % x ===0)
  		return item;
  	return undefined;
  });
};

console.log(findDivisibleNum(numbers, 3));