chkHighScoresApp.controller("PasswordController", function ($scope, $state) {

	var passCtrl = this;
	passCtrl.back = "< Volver";	
	passCtrl.hash = -59530557;
	passCtrl.passwordHash = 0;

	passCtrl.checkPassword = function(){
		var str = passCtrl.password.toLowerCase();
		var hash = 0;
	    if (str.length == 0) return hash;
	    for (var i = 0; i < str.length; i++) {
	        var char = str.charCodeAt(i);
	        hash = ((hash<<5)-hash)+char;
	        hash = hash & hash; // Convert to 32bit integer
	    }
	    passCtrl.passwordHash = hash;

	    passCtrl.wrongPass = passCtrl.passwordHash!=passCtrl.hash;
	}
	
});
