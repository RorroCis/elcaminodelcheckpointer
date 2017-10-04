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

		//Gets all questions made
		var getAllQuestions = function(){
			var questions = [];
			var promise = $http.get('scripts/data/scores.json').then(function(response) {	
			 	_.forEach(response.data.results, function(month) {
					_.forEach(month.players, function(player) {
   			    		_.forEach(player.questions, function(question) {
					  		questions.push(question);
						});
					});
				});
        		return questions;
			}, function(response) {
	        	console.log("ERROR: "+response.data ? response.data.errors : response);
			});	
			return promise
		};	

		//Get stats from all the questions 
		var getStats = function(){
			var questions = getAllQuestions().then(function(data) {
				var stats = [
					{"checkpointer":"Diegote", "color":"#03a9f4", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]},
					{"checkpointer":"Dieguito", "color":"#cc382d", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]},
					{"checkpointer":"Guille", "color":"#ff9800", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]},
					{"checkpointer":"Seba", "color":"#ffd54f", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]},
					{"checkpointer":"Fede", "color":"#03a9f4", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]},
					{"checkpointer":"Sam", "color":"#03a9f4", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]},
					{"checkpointer":"Facu", "color":"#f49100", 
									"total":{"cant":0, "right":0, "wrong":0}, 
									"help":0, 
									"easy":{"cant":0, "right":0, "wrong":0}, 
									"medium":{"cant":0, "right":0, "wrong":0}, 
									"hard":{"cant":0, "right":0, "wrong":0},
									"questions":[]}
				];

				_.forEach(data, function(question) {
					var chkStat = _.find(stats, function(stat) { return stat.checkpointer == question.checkpointer; });
			  		chkStat.total.cant++;
			  		if (typeof(question.points) !== 'undefined'){
			  			chkStat.total.right++;
			  			if(question.difficulty == 1){
				  			chkStat.easy.cant++;
				  			chkStat.easy.right++;
				  		}else if(question.difficulty == 2){
				  			chkStat.medium.cant++;
				  			chkStat.medium.right++;
				  		}else if(question.difficulty == 3){
				  			chkStat.hard.cant++;
				  			chkStat.hard.right++;
				  		}
			  		}else{
			  			chkStat.total.wrong++;
			  			if(question.difficulty == 1){
				  			chkStat.easy.cant++;
				  			chkStat.easy.wrong++;
				  		}else if(question.difficulty == 2){
				  			chkStat.medium.cant++;
				  			chkStat.medium.wrong++;
				  		}else if(question.difficulty == 3){
				  			chkStat.hard.cant++;
				  			chkStat.hard.wrong++;
				  		}
			  		}
			  		if (typeof(question.help) !== 'undefined'){
			  			chkStat.help++;
			  		}
			  		chkStat.questions.push(question);
				});
				return stats;
			});
			return questions;
		};	

		//Get stats from all the questions 
		var getFinalists = function(){
			var finalists = getTopScores().then(function(data) {
				var players = [];
				_.forEach(data.results, function(month) {
					var finalist = _.find(month.players, function(player) { return player.position == "first"; });
			  		if (typeof(finalist) !== 'undefined'){
			  			finalist.month = month.month;
			  			finalist.monthNumber = month.monthNumber;
						players.push(finalist);
					}
				});
				return players;
			});
			return finalists;
		};	

	return{
		getTopScores : getTopScores,
		getFinalists : getFinalists,
		getAllQuestions : getAllQuestions,
		getStats : getStats
	}
});