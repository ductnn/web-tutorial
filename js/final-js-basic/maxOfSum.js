/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/

function maxOfSumChain(arr,k){
  // write code here.
  var result = 0, total = 0;
  for(var i = 0; i < k-1; i++){
  	total += arr[i];
  };
  for(var i = k-1; i < arr.length; i++){
  	total += arr[i];
  	if(total > result)
  		result = total;
  	total -= arr[i-k+1];
  };
  return result;
};

console.log(maxOfSumChain([1,3,2],2));