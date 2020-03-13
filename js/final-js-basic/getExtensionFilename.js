// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
  // viết code ở đây.
  var arr = filename.split(".");
  return arr[arr.length-1];
};

console.log(getExtensionFilename("README.md"));