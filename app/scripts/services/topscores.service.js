chkHighScoresApp.factory('TopScoresService', function($http) {

		//Gets the top scores json file and return it as an object
		var getTopScores = function(){
			 var promise = $http.get('scripts/data/scores.json').then(function(response) {	
        		return response.data;
			}, function(response) {
	        	console.log("ERROR: "+response.data ? response.data.errors : response);
			});	
			return promise
		};		

	return{
		getTopScores : getTopScores
	}
});