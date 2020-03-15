/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
	if(str1.length !== str2.length){
		return false;
	} else {
		for(var i = 0; i < str1.length; i++){
			var temp = str1[i];
			if(temp = str2[i])
				return true;
			return false;
		};
	};
};


console.log(rearrangeChar("abcd", "bcda"));