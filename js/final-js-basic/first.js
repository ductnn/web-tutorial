// viết hàm first trả về giá trị đầu tiên của mảng, 
// nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên 
// của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). 
// Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về

function first(array, n) {
  // viết code ở đây.
  if (n <= 0)
  	return [];
  if (n > array.length)
  	return array;
  if(!n)
  	return array.slice(0, 1);
  return array.slice(0, n);
};

console.log(first([1,2,3], 2));