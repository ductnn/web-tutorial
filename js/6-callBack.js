//Callback

function sayHello() {
	// body...
	console.log('I love Coders.Tokyo');
};

function countAndDo(callback) {
	// body...
	var result = '';
	for(var i = 1; i <= 10; i++){
		result += i + ' ';
	};
	callback(console.log(result));
};
//////////////////////////////////

/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */
 function double(num) {
 	// body...
 	return num*2;
 };

 function sumAndDo(nums, callback) {
 	// body...
 	var total = 0;
 	for(var num of nums){
 		total += num;
 	};

 	return callback(total);
 };
////////////////////////////////////
/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
 function transform(numbers, callback) {
 	// body...
 	var result = [];
 	for(var i = 0; i < numbers.length; i++ ){
 		result.push(callback(numbers[i]));
 	};
 	return result;
 };

 function double(num){
 	return num*2;
 };

 console.log(transform([1, 2, 3], double));
