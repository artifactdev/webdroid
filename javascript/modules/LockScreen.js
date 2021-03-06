﻿/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var LockScreen = {

	id : "lockScreen",
	
	useCloseAnimation : false,
	
	show : function() {
		ApplicationScreenHelper.showApplication( LockScreen.id, LockScreen );
		LockScreen.refreshLockItem();
	},
	
	refreshLockItem : function() {
		$( "#lockItem" ).removeAttr("style");
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( LockScreen.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( LockScreen.id );
	},
	

	created : function( application ) {
		
		$( "#lockItem" ).draggable({ 
			revert: "invalid", 
			start: function( event, ui ) {
				$( ".actionCircle, .unlockItems" ).stop(true, true).fadeIn();
				$("#lockItem").addClass("dropping");
			}, 
			stop: function(event, ui) {
				$( ".actionCircle, .unlockItems" ).stop(true, true).fadeOut();
				$("#lockItem").removeClass("dropping");
			}
		});

		$( ".unlockItems DIV" ).droppable({
			tolerance: "pointer",
			drop: function( event, ui ) {
				if ($( this ).attr("id") == "lockUnlock") {
					DeviceManager.unlockDevice();
				} else {
					// cam
					DeviceManager.openCam();
				}
			}});

		function updateClock() {
			$(".time").html(Utilities.getTime());
			$(".date").html(Utilities.getDate());	
		}
	       	

   		setInterval(updateClock, 1000);

		
	},

	appHTML : '<div id="lockScreen" class="deviceApplication">' +
				'<div class="infoBar">' +
					'<ul class="notification"></ul>' +
					'<ul class="systemInfo">' +
						'<li class="battery">Akku</li>' +
						'<li class="network">Empfang</li>' +
					'</ul>' +
				'</div>' +
				'<div class="appArea">' +
					'<div class="time right"></div>' +
					'<div class="date right"></div>' +
					'<div class="weather"></div>' +
					'<div class="lockArea">' +
						'<div class="actionCircle hidden"></div>' +	
						'<div class="unlockItems hidden">' +
							'<div id="lockUnlockCam" class="left"></div>' +
							'<div id="lockUnlock" class="right"></div>' +
						'</div>' +
						'<div id="lockItem"></div>' +
					'</div>' +
				'</div>' +
			'</div>'
	
};
