//////////////////////////

//for...of
function multiply(arr) {
	// body...
	var result = 1;
	for(var a of arr){
		result *= a;
	};
	return result;
};
/////////////////////////

//for...in
var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

function getObjectKey(obj, keys) {
  // Write code here...
	if(typeof keys === 'undefined')
		var arr = [];
	else
	  	arr = keys;
	    for(var key in obj){
	  		arr.push(key);
	  		if(typeof obj[key] === 'object'){
	  			getObjectKey(obj[key], arr);
	  		};
	  	};
	return arr;
};
////////////////////////////////

//kiem tra key
function has(object, key) {
	// body...
	for (var k in object){
		if(key === k)
			return true;
	};
	return false;
};
///////////////////////////////

//sum of arr
function sum(numbers) {
	// body...
	var total = 0
	if(numbers.lenght == 0) 
		return 0;
	else {
		for(var num of numbers){
			total += num;
		};
	};
	return total;
};
