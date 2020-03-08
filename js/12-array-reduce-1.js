// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];

function flatten(arr) {
  // viết code ở đây.
  return arr.reduce((a, b) => {
  	return a.concat(b); 
  }, []);
};

console.log(flatten(arrays));
////////////////////////////////////////////////////////////////
/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce((a, b) => {
  	if(a[b])
  		b = a[b]++;
  	else a[b] = 1;
  	return a;
  }, {});
};

console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));


