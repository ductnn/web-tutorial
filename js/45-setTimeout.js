function doAfter(fn, time) {
  	return new Promise(function(resolve, reject) {
    	setTimeout(function(){
        	resolve(fn());
      	}, time);
  	});
};

function meow(){
	console.log('Hello Meow');
};

function me() {
	// body...
	console.log('Hello Ductn');
};

doAfter(meow, 1000).then(me);