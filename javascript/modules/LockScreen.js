/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var LockScreen = {

	id : "lockScreen",
	
	show : function() {
		ApplicationScreenHelper.showApplication( LockScreen.id, LockScreen );
		
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( LockScreen.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( LockScreen.id );
	},
	

	created : function( application ) {
		// Uhrzeit und so
		/*$( ".unlockItems DIV" ).sortable({
			disabled: true
		});
		$( "#lockItem" ).draggable({
			snap: "#lockUnlock", 
			snapMode: 'inner', 
			revert: true,
			stop: function(event, ui) {
				var moo = ui;
			}
		});*/
		
		$( "#lockItem" ).draggable({ 
			revert: "invalid", 
			start: function( event, ui ) {
				$( ".actionCircle, .unlockItems" ).stop(true, true).fadeIn();
			}, 
			stop: function(event, ui) {
				$( ".actionCircle, .unlockItems" ).stop(true, true).fadeOut();
			}
		});

		$( ".unlockItems DIV" ).droppable({
			tolerance: "pointer",
			drop: function( event, ui ) {
				if ($( this ).attr("id") == "lockUnlock") {
					//ui.draggable.hide();
					DeviceManager.unlockDevice();
				} else {
					// cam
				}
			}});

		function updateClock() {
     		var currentTime = new Date ( );
      		var currentHours = currentTime.getHours ( );
      		var currentMinutes = currentTime.getMinutes ( );
      		var currentSeconds = currentTime.getSeconds ( );
 
      		// Pad the minutes and seconds with leading zeros, if required
      		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
      		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 
 
     	 	// Convert an hours component of "0" to "12"
      		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
      		// Compose the string for display
      		var currentTimeString = currentHours + ":" + currentMinutes;
       
       
       		$(".time").html(currentTimeString);


        alert(currentTimeString);      
 		}
 		
		
   		setInterval('updateClock()', 1000);

		
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
					'<div class="date right">Di., 11. September</div>' +
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
