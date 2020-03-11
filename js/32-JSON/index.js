/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var fs = require('fs');
var data = fs.readFileSync('./data.json');

data1 = JSON.parse(data);
console.log(data1);

var members = [
	{
		name: "Ductn",
		id: 0,
		age: 22
	},
	{
		name: "Biin",
		id: 1,
		age: 20
	}
];

function convertMem(arr) {
	// body...
	var obj = {};
	for(var i = 0; i < arr.length; i++){
		obj[i] = arr[i];
	};
	return obj;
};

var mem = convertMem(members);
var mem1 = JSON.stringify(mem);

console.log(mem1);
// fs.writeFileSync('./data.json', mem1);
// console.log(JSON.parse(members));
/////////////////////////////////////////////////////////////

var obj = { name: "CodersX", age: 1};
var json = JSON.stringify(obj);

console.log(json);
console.log(typeof json);