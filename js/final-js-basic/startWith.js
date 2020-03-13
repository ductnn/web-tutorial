// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 

function startWith(str){
  // viết code ở đây.
  if(str.slice(0, 4) === "Java")
  	return true;
  return false;
};

console.log(startWith("java mento"));