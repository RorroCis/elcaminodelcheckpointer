chkHighScoresApp.controller("TopScoresController", function ($scope, $state, $rootScope, TopScoresService) {

	var topScoresCtrl = this;

	//Gets top socres from service 
	topScoresCtrl.getTopScores = function(){
		var topscores = TopScoresService.getTopScores().then(function(data) {
			topScoresCtrl.results = data.results;
			topScoresCtrl.currentMonth = data.results[0].monthNumber;
		});
		TopScoresService.getStats();
	};

	topScoresCtrl.showModals = function(handler){
		$('#modal-'+handler).modal('show');
	}

	topScoresCtrl.getTopScores();
	topScoresCtrl.start = ">> PRESS START TO PLAY <<";
	$rootScope.$on('$stateChangeSuccess', function() {
    	document.body.scrollTop = document.documentElement.scrollTop = 0;
  	});

  	var easter_egg = new Konami('https://store.playstation.com/#!/es-ar/juegos-gratuitos/cid=STORE-MSF77008-PSPLUSFREEGAMESL');

});
