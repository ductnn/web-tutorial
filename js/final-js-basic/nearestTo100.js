// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89

function nearestTo100(a, b){
  // viết code ở đây.
  var tmpa = Math.abs(100 - a);
  var tmpb = Math.abs(100 - b);
  if (tmpa < tmpb)
  	return a;
  else if(tmpa == tmpb && a < b)
  	return a;
  return b;
};

console.log(nearestTo100(10, 130));