// array filter
var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.filter((item) => {
	return item % 2 === 0;
});
////////////////////////////////////////////

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
	// body...
	return arr.filter((item) => item %2 === 0);
};
///////////////////////////////////////////
/**
 * Give a list of students, filter out non-female 
 */
  var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
  // your code here!
  return members.filter((member) => {
  	if(member.gender !== "female")
  		return member.name;
  });
};

console.log(filterOutFemales(members));