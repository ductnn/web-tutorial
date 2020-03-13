// Node Co

var fs = require('fs');

function readFilePromise(path) {
	// body...
	return new Promise(function (resolve, reject) {
		// body...
		fs.readFile(path, { encoding: "utf8" }, function (error, data) {
			// body...
			if(error){
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
};