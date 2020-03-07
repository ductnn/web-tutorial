//array reduce
var numbers = [1, 2, 3, 4];
var sumNumbers = numbers.reduce((a, b) => {
	return a + b;
});
//////////////////////////////////////////////

// Turn an array of voter objects into a count of how many people voted
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
  // write code here...
  var votes = arr.map((vote) => {
  	if(vote.voted === true)
  		return vote.voted = 1;
  	else
  		return vote.voted = 0;
  });
  return votes.reduce((a, b) =>{
  	return a + b;
  });
};
//////////////////////////////////////////////
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist) {
  // Write code here...
  return wishlist.map((wish) => {
  	return wish.price;
  }).reduce((a, b) => {
  	return a + b;
  });
};

console.log(shoppingSpree(wishlist));

function arrayTitle(wishlist) {
	// body...
	return wishlist.map((wish) => {
		return wish.title;
	});
};

console.log(arrayTitle(wishlist));