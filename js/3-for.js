//Số nguyên tố 
function isPrimeNumber(x) {
	// body...
	if (x == 0 || x == 1)
		return false;
	else {
		for (var i = 2; i < x - 1; i++) {
			if (x % i == 0) {
				return false;
				break;
			};
		};
	};

	return true;
};
////////////////////////////////

//Bảng chữ cái 
function fromCharCode() {
	// body...
	var output = ""; 
	for (var i = 97; i < 123; i = i + 1) {
	    output += String.fromCharCode(i); 
	};
	
	return output;
}

console.log(fromCharCode());
////////////////////////////////

// Tổng các phần tử trong mảng 
function sum(array) {
	// body...
	var total = 0;
	for(var i = 0; i < array.length; i++){
		total += array[i];
	};

	return total;
}
////////////////////////////////////

// Tổng 2 mảng 
function sumMultiplyArray(a, b) {
	// body...
	var total = 0;
	for(var i = 0; i < a.length; i++){
		for(var j = 0; j < b.length; j++){
			total += a[i] * b[j];
		};
	};
	return total;
};
//////////////////////////////////////

// Tính tích các số từ start đến end - 1
function calculate(start, end) {
	// body...
	var result = 1;
	for(var i = start; i < end; i++){
		result *= i;
	};
	return result;
};
//////////////////////////////////////

// Kiểm tra phần tử có trong mảng 
function has(array, value) {
	// body...
	for(var i = 0; i < array.length; i++){
		if(array[i] === value)
			return true;
	};
	return false;
};

var a = [1, 2, 3];
var b = "3";

console.log(has(a, b));