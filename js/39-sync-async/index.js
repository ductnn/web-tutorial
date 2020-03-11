/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

 const request = require('request');

 console.time("Time");

 request('https://randomuser.me/api/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

 console.timeEnd("Time");

var axios = require('axios');
var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';

function getData() {
  var a = axios.get(url1).then(function(response){
    console.log(response.data);
  }).catch(function(err){
    console.log(err);
  });
  var b = axios.get(url2).then(function(response){
    console.log(response.data);
  }).catch(function(err){
    console.log(err);
  });
  return a,b;
}
getData()