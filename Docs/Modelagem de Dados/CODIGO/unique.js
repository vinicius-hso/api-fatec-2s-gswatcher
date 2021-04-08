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
	        output.push(out[count][parameter]);
	        count++;
	    }
	}

	return output;	

}
module.exports = unique;
