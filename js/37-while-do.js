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
