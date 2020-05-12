function getTotalX(a, b) {
	// Write your code here
	const lowLimit = a[a.length — 1];
	const highLimit = b[0];
	let consideredMultiples = [];
	//get multiples of the highest member in the first array till the lowest value in the second array
	for (let i = lowLimit; i <= highLimit; i += lowLimit){
	    consideredMultiples.push(i);
	}
	//filter the array based on whether members of first array can go in it
	consideredMultiples = consideredMultiples.filter(multiple => a.reduce((shouldFilter, val) => (multiple % val !== 0)? false : (shouldFilter)? true: null , true));
	//filter the array based on whether its members can go in the second array
	consideredMultiples = consideredMultiples.filter(multiple => b.reduce((shouldFilter, val) => (val % multiple !== 0)? false : (shouldFilter)? true: null , true));
	return consideredMultiples.length;
}