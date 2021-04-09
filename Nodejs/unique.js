var unique = function(input,parameter){

	var count = 0;
	var out = [];
	var output = [];

	for (var i = 0, l = input.length; i < l; i++) {
	    var unique = true;
	    for (var j = 0, k = out.length; j < k; j++) {
	        if ((input[i][parameter] == out[j][parameter])) {
	            unique = false;
	        }
	    }
	    if (unique) {
	        out.push(input[i]);
	        output.push(count, out[count][parameter]);
	        count++;
	    }
	}

	//console.log('\nFuncUnique for parameter "'+parameter+'":')
	//console.log('SIZE - input json file: '+input.length); // 10
	//console.log('SIZE - output table: '+out.length); // 5

	return output;	

}
module.exports = unique;
