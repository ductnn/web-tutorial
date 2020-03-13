// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'

// Using loop
function reverse(str) {
  // viết code ở đây.
  var newString = "";
  for (let i = str.length - 1; i >= 0; i--){
  	newString += str[i];
  };
  return newString;
};

console.log(reverse("hello"));

// Using split
function reverse1(str){
	var splitArray = str.split("");
	var reverseArray = splitArray.reverse();
	var newString = reverseArray.join("");
	return newString;
};

console.log(reverse1("hello"));
