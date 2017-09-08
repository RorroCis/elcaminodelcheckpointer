chkHighScoresApp.filter('players', function() {
	return function(input) {
		var players = input;
	   	while (_.size(players) < 10) { 
	   		var wrapped = _(players).push({points:0,stage:"----",name:"--------"});
 			wrapped = wrapped.commit();
		}
    	return players;
    }
});