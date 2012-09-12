/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var DashBoard = {

	id : "dashBoard",
	
	show : function() {
		ApplicationScreenHelper.showApplication( DashBoard.id, DashBoard );
		DeviceManager.refreshAppShortCutListeners();
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( DashBoard.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( DashBoard.id );
	},
	
	created : function() {
		$( "#dashBoardApps" ).draggable({
			axis: "x",
			start: function( event, ui ) {
			},
			stop: function( event, ui ) {
				var left = ui.position.left;
				var numberOfDashBoards = 5;
				var dashBoardWidth = 350;
				
				if (left > 0) {
					ui.helper.stop(true, true).animate({"left": 0});
				} else if (left < (-1 * (dashBoardWidth * (numberOfDashBoards - 1)))) {
					ui.helper.stop(true, true).animate({"left": (-1 * (dashBoardWidth * (numberOfDashBoards - 1)))});
				} else {
					//am raster ausrichten
					var d = left / dashBoardWidth;
					console.log(d);
					var d = Math.round(d) * -1;
					console.log(d);
					ui.helper.stop(true, true).animate({"left": (-1 * (dashBoardWidth * (d)))});
				}
				
			}			
		});
		
	},

	appHTML : '<div id="dashBoard" class="deviceApplication">' +
		'<div class="infoBar">' +
			'<ul class="notification"></ul>' +
			'<ul class="systemInfo">' +
				'<li class="battery">Akku</li>' +
				'<li class="network">Empfang</li>' +
			'</ul>' +
		'</div>' +
		'<div class="appArea">' +
			'<div id="dashBoardApps">' +
				'<div id="dashBoard0"></div>' +
				'<div id="dashBoard1"></div>' +
				'<div id="dashBoard2"></div>' +
				'<div id="dashBoard3"></div>' +
				'<div id="dashBoard4"></div>' +
			'</div>' + 
			'<ul class="dashBoardShortCuts">' +
				'<li class="deviceAppShortCut iconMail" data-webdroid-handler="MailApp">Mail</li>' +
				'<li class="deviceAppShortCut iconCam" data-webdroid-handler="CamApp">Kamera</li>' +
				'<li class="deviceAppShortCut iconApps" data-webdroid-handler="AppsApp"></li>' +
				'<li class="deviceAppShortCut iconNickel" data-webdroid-handler="NickelApp">Nickel</li>' +
				'<li class="deviceAppShortCut iconMap" data-webdroid-handler="MapApp">Karte</li>' +
			'</ul>' +
		'</div>' + 
	'</div>' + 
	'</div>'

};