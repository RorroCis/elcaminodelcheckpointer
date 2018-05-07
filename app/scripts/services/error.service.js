chkHighScoresApp.factory('ErrorService', function($http) {

		//Gets the roms json file and return it as an object
		var getRoms = function(){
			 var promise = $http.get('scripts/data/roms.json').then(function(response) {	
        		return response.data;
			}, function(response) {
	        	console.log("ERROR: "+response.data ? response.data.errors : response);
			});	
			return promise
		};		

	return{
		getRoms : getRoms
	}
});