chkHighScoresApp.controller("StatsController", function ($scope, $state, $rootScope, $filter, TopScoresService) {

	var statsCtrl = this;
	statsCtrl.back="< Volver";
		
	//Gets top socres from service 
	statsCtrl.getStats = function(){
		console.log("Get Stats");
		TopScoresService.getStats().then(function(data) {

			statsCtrl.compByDifficulty=statsCtrl.getCompByDifficulty(data);
			statsCtrl.compByAnswers=statsCtrl.getCompByAnswers(data);
			statsCtrl.compByWrong=statsCtrl.getCompByWrong(data);
			statsCtrl.compByRight=statsCtrl.getCompByRight(data);

			_.forEach(data, function(chkStats) {
				chkStats.results={};
				chkStats.results.total=statsCtrl.getResuls(chkStats.total);
				chkStats.results.easy=statsCtrl.getResuls(chkStats.easy);
				chkStats.results.medium=statsCtrl.getResuls(chkStats.medium);
				chkStats.results.hard=statsCtrl.getResuls(chkStats.hard);
				chkStats.difficulty=statsCtrl.getDifficulty(chkStats);
			});

			statsCtrl.stats=data;
			statsCtrl.checkpointer = data[0].checkpointer;

		});
	};

	statsCtrl.getResuls = function(answers){
		var results={}
		results.type = "PieChart";
		results.data = {"cols": [
	        {id: "t", label: "results", type: "string"},
	        {id: "s", label: "cant", type: "number"}
	    ], "rows": [
	        {c: [
	            {v: "Correctas"},
	            {v: answers.right},
	        ]},
	        {c: [
	            {v: "Incorrectas"},
	            {v: answers.wrong}
	        ]}
	    ]};	
		results.options = {
		    'backgroundColor':'transparent',
		    'legend':{'position':'none'},
		    'vAxis':{'textStyle':{'color':'white'}},
		    'hAxis':{'textStyle':{'color':'white'}},
		    'titleTextStyle':{'color':'white', 'fontSize': '22'},
		    'colors': ['#00ff00','#ff0000']
		};
		return results;
	};

	statsCtrl.getDifficulty = function(chkStats){
		var difficulty={};
		difficulty.type = "PieChart";
		difficulty.data = {"cols": [
	        {id: "t", label: "difficulty", type: "string"},
	        {id: "s", label: "cant", type: "number"}
	    ], "rows": [
	        {c: [
	            {v: "Facil"},
	            {v: chkStats.easy.cant},
	        ]},
	        {c: [
	            {v: "Medias"},
	            {v: chkStats.medium.cant},
	        ]},
	        {c: [
	            {v: "Dificiles"},
	            {v: chkStats.hard.cant}
	        ]}
	    ]};	
		difficulty.options = {
		    'backgroundColor':'transparent',
		    'legend':{'position':'none'},
		    'vAxis':{'textStyle':{'color':'white'}},
		    'hAxis':{'textStyle':{'color':'white'}},
		    'titleTextStyle':{'color':'white', 'fontSize': '22'},
		    'colors': ['#00aa00','#ffd54f','#cc382d']
		};
		return difficulty;
	};

	statsCtrl.getCompByDifficulty = function(stats){
		var difficulty={};
		difficulty.type= "ColumnChart";
		difficulty.displayed= false;
		difficulty.data= {};
		difficulty.data.cols= [
			{ "id": "checkpointer", "label": "Checkpointer", "type": "string", "p": {} },
			{ "id": "easy", "label": "Faciles", "type": "number", "p": {} },
			{ "id": "medium", "label": "Medias", "type": "number", "p": {}},
			{ "id": "hard", "label": "Dificiles", "type": "number", "p": {}}
	    ];
		var rows=[];
		_.forEach(stats, function(chkStats) {
			var chkDiffCant = {
		        "c": [
		        	{"v": chkStats.checkpointer},
		          	{"v": chkStats.easy.cant},
		          	{"v": chkStats.medium.cant},
		          	{"v": chkStats.hard.cant}
		        ]
		      };
		      rows.push(chkDiffCant);
		});
		difficulty.data.rows= rows;
		difficulty.options = {
			    "isStacked": "true",
			    "fill": 10,
			    "displayExactValues": true,
			    "vAxis": {
			      "title": "Sales unit",
			      "gridlines": {
			        "count": 2
			      }
			    },
			    "hAxis": {
			      "title": "Date"
			    },
		    'backgroundColor':'transparent',
		    'legend':{'position':'none'},
		    'vAxis':{'textStyle':{'color':'white'}},
		    'hAxis':{'textStyle':{'color':'white'}},
		    'titleTextStyle':{'color':'white', 'fontSize': '22'},
		    'colors': ['#00aa00','#ffd54f','#cc382d']

		};

		return difficulty;
	};

	statsCtrl.getCompByAnswers = function(stats){
		var answers={};
		answers.type= "ColumnChart";
		answers.displayed= false;
		answers.data= {};
		answers.data.cols= [
			{ "id": "checkpointer", "label": "Checkpointer", "type": "string", "p": {} },
			{ "id": "right", "label": "Correctas", "type": "number", "p": {} },
			{ "id": "wrong", "label": "Incorrectas", "type": "number", "p": {}}
	    ];
		var rows=[];
		_.forEach(stats, function(chkStats) {
			var chkDiffCant = {
		        "c": [
		        	{"v": chkStats.checkpointer},
		          	{"v": chkStats.total.right},
		          	{"v": chkStats.total.wrong}
		        ]
		      };
		      rows.push(chkDiffCant);
		});
		answers.data.rows= rows;
		answers.options = {
			    "isStacked": "true",
			    "fill": 10,
			    "displayExactValues": true,
			    "vAxis": {
			      "title": "Sales unit",
			      "gridlines": {
			        "count": 2
			      }
			    },
			    "hAxis": {
			      "title": "Date"
			    },
		    'backgroundColor':'transparent',
		    'legend':{'position':'none'},
		    'vAxis':{'textStyle':{'color':'white'}},
		    'hAxis':{'textStyle':{'color':'white'}},
		    'titleTextStyle':{'color':'white', 'fontSize': '22'},
		    'colors': ['#00ff00','#ff0000']

		};

		return answers;
	};

	statsCtrl.getCompByWrong = function(stats){
		var wrongs={};
		wrongs.type= "ColumnChart";
		wrongs.displayed= false;
		wrongs.data= {};
		wrongs.data.cols= [
			{ "id": "checkpointer", "label": "Checkpointer", "type": "string", "p": {} },
			{ "id": "wrong", "label": "Incorrectas", "type": "number", "p": {}}
	    ];
		var rows=[];
		_.forEach(stats, function(chkStats) {
			var avgWrong = $filter('number')((chkStats.total.wrong / chkStats.total.cant * 100),0);
			var chkDiffCant = {
		        "c": [
		        	{"v": chkStats.checkpointer},
		          	{"v": avgWrong, "f": avgWrong +"%" }
		        ]
		      };
		      rows.push(chkDiffCant);
		});
		wrongs.data.rows= rows;
		wrongs.options = {
			    "fill": 10,
			    "displayExactValues": true,
			    "vAxis": {
			      "title": "Sales unit",
			      "gridlines": {
			        "count": 2
			      }
			    },
			    "hAxis": {
			      "title": "Date"
			    },
		    'backgroundColor':'transparent',
		    'legend':{'position':'none'},
		    'vAxis':{'textStyle':{'color':'white'}},
		    'hAxis':{'textStyle':{'color':'white'}},
		    'titleTextStyle':{'color':'white', 'fontSize': '22'},
		    'colors': ['#ff0000']

		};

		return wrongs;
	};


	statsCtrl.getCompByRight = function(stats){
		var right={};
		right.type= "ColumnChart";
		right.displayed= false;
		right.data= {};
		right.data.cols= [
			{ "id": "checkpointer", "label": "Checkpointer", "type": "string", "p": {} },
			{ "id": "right", "label": "Correctas", "type": "number", "p": {}}
	    ];
		var rows=[];
		_.forEach(stats, function(chkStats) {
			var avgRight = $filter('number')((chkStats.total.right / chkStats.total.cant * 100),0);
			var chkDiffCant = {
		        "c": [
		        	{"v": chkStats.checkpointer},
		          	{"v": avgRight, "f": avgRight +"%" }
		        ]
		      };
		      rows.push(chkDiffCant);
		});
		right.data.rows= rows;
		right.options = {
			    "fill": 10,
			    "displayExactValues": true,
			    "vAxis": {
			      "title": "Sales unit",
			      "gridlines": {
			        "count": 2
			      }
			    },
			    "hAxis": {
			      "title": "Date"
			    },
		    'backgroundColor':'transparent',
		    'legend':{'position':'none'},
		    'vAxis':{'textStyle':{'color':'white'}},
		    'hAxis':{'textStyle':{'color':'white'}},
		    'titleTextStyle':{'color':'white', 'fontSize': '22'},
		    'colors': ['#00ff00']

		};

		return right;
	};
	statsCtrl.getStats();

  	var easter_egg = new Konami('https://store.playstation.com/#!/es-ar/juegos-gratuitos/cid=STORE-MSF77008-PSPLUSFREEGAMESL');

});
