chkHighScoresApp.filter('difficulty', function() {
	return function(input) {
		if(input == 1){
			return 'Facil';
		}
		if(input == 2){
			return 'Medio';
		}
		if(input == 3){
			return 'Dificil';
		}
    }
});