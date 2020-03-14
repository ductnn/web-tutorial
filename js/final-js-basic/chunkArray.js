/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/

function chunkArrayInGroups(arr, size){
  // write code here.
  var newArray = [];
  while (arr.length > size){
  	newArray.push(arr.splice(0, size));
  };
  if (arr.length)
  	newArray.push(arr);
  return newArray;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));