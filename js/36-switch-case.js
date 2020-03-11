/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  // your code here
  var newArr = arr.map((item) => {
  	switch(item){
  		case 'A':
  			return 1;
  		case 'a':
  			return 1;
  		case 'B':
  			return 2;
  		case 'b':
  			return 2;
  		default:
  			return 0;
  	}
  });
  return newArr;
};

console.log(transform(['A', 'b', 'a', 'B', 'd']));