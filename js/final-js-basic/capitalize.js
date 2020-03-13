// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"

function capitalize(str) {
	// viết code ở đây
	// return str
	// 	.toUpperCase()
	// 	.split(' ')
	// 	.map((item) => {
	// 		return item[0].toUpperCase() + item.substr(1);
	// 	}).join(' ');
	var items = str.split(" ");
	var arr = [];
	for(var key in items){
		temp = items[key].toLowerCase();
		temp = temp.charAt(0).toUpperCase() + temp.substring(1);
		arr.push(temp);
	};
	return arr.join(" ");
};

console.log(capitalize("abc kld"));