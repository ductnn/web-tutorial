/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
  // Viết code tại đây
  var maxs=0;
  for(var i=0;i<arr.length-1;i++)
    for(var j=i+1;j<arr.length;j++)
     if(maxs<Math.abs(arr[i]-arr[j]))
       maxs=Math.abs(arr[i]-arr[j]);
  return maxs;
};

function find (arr) {
	// body...
	arr.sort((a, b) => {
		return a-b;
	}); 
	return arr[arr.length-1] - arr[0];
};

console.log(findmaxDiff([1, 2, 3, 18, 9]));
console.log(find([1, 2, 3, 18, 9]));