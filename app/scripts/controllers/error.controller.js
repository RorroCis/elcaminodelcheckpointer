chkHighScoresApp.controller("ErrorController", function ($scope, $state, ErrorService) {

	var errorCtrl = this;

	//Gets roms from service 
	errorCtrl.getRoms = function(){
		var roms = ErrorService.getRoms().then(function(data) {
			errorCtrl.roms = data.roms;
		});
	};

	$scope.$watch('errorCtrl.romSelected', function(newValue, oldValue) {
		console.log(newValue);
		var romPath = "./roms/"+newValue.value+".nes";
		console.log(romPath);
		errorCtrl.emulator.load(romPath, true);
	});
	errorCtrl.back="< Volver";
	errorCtrl.emulator = new NesNes(nesnes);
	errorCtrl.getRoms();
	
	
  	var easter_egg = new Konami('https://store.playstation.com/#!/es-ar/juegos-gratuitos/cid=STORE-MSF77008-PSPLUSFREEGAMESL');
});
