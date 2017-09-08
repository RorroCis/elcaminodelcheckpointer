chkHighScoresApp.controller("TopScoresController", function ($scope, $state, $rootScope, TopScoresService) {

	var topScoresCtrl = this;

	//Gets top socres from service 
	topScoresCtrl.getTopScores = function(){
		console.log("Get Top Scores");
		var topscores = TopScoresService.getTopScores().then(function(data) {
			topScoresCtrl.results = data.results;
			topScoresCtrl.currentMonth = data.results[0].monthNumber;
		});
	};

	topScoresCtrl.showModals = function(handler){
		$('#modal-'+handler).modal('show');
	}

	topScoresCtrl.getTopScores();
	topScoresCtrl.start = ">> PRESS START TO PLAY <<";
	$rootScope.$on('$stateChangeSuccess', function() {
    	document.body.scrollTop = document.documentElement.scrollTop = 0;
  	});
});
