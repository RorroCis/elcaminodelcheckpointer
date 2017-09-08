chkHighScoresApp.filter('points', function() {
	return function(input) {
	   	while (input.toString().length < 6) { 
	    	input = '0' + input;
		}
    	return input;
    }
});