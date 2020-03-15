/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
	arr = arr.sort();
	var newArr = [];
	var count = 1, maxCount = 1, res = arr[0];
	for(var i = 1; i < arr.length; i++){
		if (arr[i] == arr[i-1]){
			count++;
		} else {
			if(count > maxCount){
				maxCount = count;
				res = arr[i-1];
			};
			count = 1;
		};
	};
	for(var i = 0; i < arr.length; i++){
		if(count > maxCount){
			maxCount = count;
			res = arr[arr.length - 1];
		};
		return newArr.push(res);
	};
};

function findMostFrequent1 (arr) {
	var obj = arr.reduce((a, b) => {
		a[b] = (a[b] || 0) + 1;
		return a;
	}, {});
	var max = Math.max(...Object.values(obj));
	return Object.keys(obj)
		.filter(i => obj[i] === max)
		.map(i => Number(i));
};

console.log(findMostFrequent1([1,2,3,4,1,2,2,1]));