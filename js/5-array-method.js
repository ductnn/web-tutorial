////////////////////////////////

//Xoa ptu cuoi cung
function removeEnd(arr, n) {
	// body...
	for(var i = 0; i < n; i++){
		arr.pop(i);
	};
	return arr;
};
////////////////////////////////

//Tra ve n phan tu dau tien
function first(arr, n) {
	// body...
	var a = [];
	for(var i = 0; i < n; i++){
		a[i] = arr.shift();
	};
	return a;
};

console.log(first([1, 2, 3], 2));