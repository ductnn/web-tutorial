// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào

function findMax(a,b,c){
	// var max = 0;
	// if (a > b && a > c)
	// 	max = a;
	// else if (b > a && b > c)
	// 	max = b;
	// else max = c;
	// return max;

	return (a > b) ? (a > c) ? a : c : (b > c) ? b : c;
};

console.log(findMax(8, 5, 10));