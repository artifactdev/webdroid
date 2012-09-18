/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var DashBoard = {

	id : "dashBoard",
	
	useCloseAnimation : false,
	
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
		DashBoard.initDashBoardSlider();
		DashBoard.refreshDashBoardGrid();
	},
	
	initDashBoardSlider : function() {
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
					var d = Math.round(d) * -1;
					ui.helper.stop(true, true).animate({"left": (-1 * (dashBoardWidth * (d)))});
				}
			}
		});
	},
	
	refreshDashBoardGrid : function() {
		var numberOfDashBoards = 5;
		for (var i = 0; i < numberOfDashBoards; i++) {
			var dashBoardItems = $( "#dashBoard" + i + " .deviceAppShortCutGrid > DIV" );
			dashBoardItems.draggable({ 
				containment: "#dashBoard" + i,
				delay: 1000,
				scroll: false, 
				start: function( event, ui ) {
					DashBoard.showMoveGrid(ui);
				},
				stop: function( event, ui ) {
					DashBoard.hideMoveGrid(ui);
				}
			});
			$( "#dashBoard" + i + " .deviceAppShortCutGrid" ).droppable({
				drop: function( event, ui ) {
					DashBoard.hideMoveGrid(ui);
					if ($( this ).find( "div" ).length == 0) {
						var clone = ui.helper.clone();
						//var left = ui.position.left - this.offsetLeft;
						//var top = ui.position.top - this.offsetTop;
						clone.appendTo($( this ));
						clone.css({
							"left" : 40,
							"top" : 40
						});
						clone.stop(true, true).animate({
							"left" : 0,
							"top" : 0
						});
						ui.helper.remove();
						DashBoard.refreshDashBoardGrid();
						DeviceManager.refreshAppShortCutListeners();
					} else {
						ui.helper.stop(true, true).animate({
							"left" : 0,
							"top" : 0
						});
					}
					
				}
			});
		}
	},
	
	showMoveGrid : function( ui ) {
		var grid = $( "<div />", {"class":"deviceAppGrid hidden"} );
		for (var i = 0; i < 9; i++) {
			$( "<div />", {"class":"gridPlus" + i} ).text("+").appendTo(grid);
		}
		grid.appendTo(ui.helper.parent().parent()).fadeIn();
	},
	
	hideMoveGrid : function( ui ) {
		var grid = ui.helper.parent().parent().find(".deviceAppGrid");
		grid.fadeOut(function() {
			grid.remove();
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
						'<div id="dashBoard1">' + 							
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid">' +
								'<div class="deviceAppShortCut" data-webdroid-handler="CamApp"><img src="./images/appIcons/i-cam.png" />Kamera</div>' +
							'</div>' +
							'<div class="deviceAppShortCutGrid" data-webdroid-handler="ToDoApp">ToDo</div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid">' +
								'<div class="deviceAppShortCut" data-webdroid-handler="MapApp"><img src="./images/appIcons/i-map.png" />Karte</div>' +
							'</div>' +
							'<div class="deviceAppShortCutGrid">' +
								'<div class="deviceAppShortCut" data-webdroid-handler="NickelApp"><img src="./images/appIcons/i-nickel.png" />Nickel</div>' +
							'</div>' +
						'</div>' +
						'<div id="dashBoard2">' +
							'<div class="deviceAppShortCutGrid">' +
								'<div class="deviceAppShortCut" data-webdroid-handler="CamApp"><img src="./images/appIcons/i-cam.png" />Kamera</div>' +
							'</div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid">' +
								'<div class="deviceAppShortCut" data-webdroid-handler="MapApp"><img src="./images/appIcons/i-map.png" />Karte</div>' +
							'</div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid"></div>' +
							'<div class="deviceAppShortCutGrid">' +
								'<div class="deviceAppShortCut" data-webdroid-handler="NickelApp"><img src="./images/appIcons/i-nickel.png" />Nickel</div>' +
							'</div>' +
						'</div>' + 
						'<div id="dashBoard3"></div>' +
						'<div id="dashBoard4"></div>' +
					'</div>' + 
					'<ul class="dashBoardShortCuts">' +
						'<li class="deviceAppShortCut iconMail" data-webdroid-handler="MailApp">Mail</li>' +
						'<li class="deviceAppShortCut iconCam" data-webdroid-handler="CamApp">Kamera</li>' +
						'<li class="deviceAppShortCut iconApps" data-webdroid-handler="AppLauncher"></li>' +
						'<li class="deviceAppShortCut iconNickel" data-webdroid-handler="NickelApp">Nickel</li>' +
						'<li class="deviceAppShortCut iconMap" data-webdroid-handler="MapApp">Karte</li>' +
					'</ul>' +
				'</div>' + 
			'</div>'

};