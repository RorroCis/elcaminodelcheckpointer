chkHighScoresApp.controller("AboutController", function ($scope, $state) {

	var aboutCtrl = this;
	aboutCtrl.back="< Volver";	
	
	aboutCtrl.videoEnd = function(){
		console.log("Ended");
	}
	
  	var easter_egg = new Konami('https://store.playstation.com/#!/es-ar/juegos-gratuitos/cid=STORE-MSF77008-PSPLUSFREEGAMESL');
});
