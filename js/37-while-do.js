/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
  // viết code ở đây.
  var total = 0;
  while(x--){
  	if(x % 2 !== 0){
  		total += x;
  	};
  };
  return total;
}; 

console.log(sum(3));
//////////////////////////////////////////////////////

/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
 var count = 1000;
 while(count--){
 	if(count % 3 == 0 && count % 5 == 0)
 		return count;
 };