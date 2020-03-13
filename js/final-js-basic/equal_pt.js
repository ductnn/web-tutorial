//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){
	if(str === ""){
		return true;
	} else {
		var count = 0, count1 = 0;
		for(var i = 0; i < str.length; i++){
			if(str.charAt(i) == "p"){
				count++;
			};
			if(str.charAt(i) == "t"){
				count1++;
			};
		};
		return count == count1;
	};
	return false;
};

console.log(equal_pt("ppptttt"));