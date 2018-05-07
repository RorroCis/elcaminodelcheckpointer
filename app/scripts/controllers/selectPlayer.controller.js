chkHighScoresApp.controller("SelectPlayerController", function ($scope, $timeout, $state, $rootScope, TopScoresService) {

	var selectPlayerCtrl = this;
	selectPlayerCtrl.back="Back to main menu";
	var numberOfFianlists= 4;

	//Gets top socres from service 
	selectPlayerCtrl.getFinalists = function(){
		var finalists = TopScoresService.getFinalists().then(function(data) {
			while(data.length < numberOfFianlists){
				data.push({});
			}
			selectPlayerCtrl.finalists = data;
			$timeout(selectPlayerCtrl.blink, 1000);
		});
	};

	selectPlayerCtrl.blink = function() { 
	  $('.insertCoin').fadeOut(1000).fadeIn(1000, selectPlayerCtrl.blink); 
	};


	selectPlayerCtrl.getFinalists();
	selectPlayerCtrl.blink();

	$rootScope.$on('$stateChangeSuccess', function() {
    	document.body.scrollTop = document.documentElement.scrollTop = 0;
  	});
  	var easter_egg = new Konami('https://store.playstation.com/#!/es-ar/juegos-gratuitos/cid=STORE-MSF77008-PSPLUSFREEGAMESL');

});
