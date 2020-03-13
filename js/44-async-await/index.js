// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

var fs = require('fs');
var axios = require('axios');

function readFiles() {
	// body...
	return new Promise(function (resolve, reject) {
		// body...
		fs.readFile('./data.json', 
			{ encoding: "utf8" }, 
			function (err, data) {
				if(err){
					reject(err);
				} else {
					resolve(data);
				};
		});
	});
};

function getLink() {
	// body...
	return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

async function run(){
	var data1 = await readFiles();
	var data2 = await getLink().then(function (res) {
		// body...
		return res.data;
	});
	return [data1, data2];
};

run().then(function (values) {
	// body...
	console.log(values);
});