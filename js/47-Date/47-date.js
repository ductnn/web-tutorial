// Date
// moment.js

var moment = require('moment');

// var now = new Date();
// var myBirth = new Date(1998, 2, 5);

// console.log(now.getTime());

//var now = moment();
// console.log(now);
////////////////////////////////////////////
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  // Write code here...
  var day = new Date(dateString);
  if(day.getDay() == 0 || day.getDay() == 6)
  	return true;
  return false;
};

//console.log(isWeekend('2020/03/15'));
//////////////////////////////////////////////////////////////////
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  // Write code here...
  return Math.abs(fromDate.getDate() - toDate.getDate());
};

// console.log(diff(fromDate, toDate));
/////////////////////////////////////////////////////////
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
  return date.getTime() - n*24*60*60*1000;
};

// console.log(subtractDays(date, 5));
/////////////////////////////////////////////////////////
/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
 // viết code ở đây
 return (new Date(b)).getTime() - (new Date(a)).getTime();
};

console.log(diffMs("02/10/2019", "10/10/2019"));