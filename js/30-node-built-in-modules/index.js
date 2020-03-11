// Node built in modules

var fs = require('fs');
var path = require('path');

var text = fs.readFileSync('./song.txt', {encoding: 'utf8'});

console.log(text);
//////////////////////////////////////////////////////////////
/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_extname_path
 */

// require module here!

function getExtension(fileName) {
  // your code here!
  return path.extname(fileName);
};

console.log(getExtension(text));