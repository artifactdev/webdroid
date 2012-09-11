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
	
	created : function() {
		// Uhrzeit und so
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
					'<div class="time right">13:22</div>' +
					'<div class="date right">Di., 11. September</div>' +
					'<div class="weather"></div>' +
					'<div class="lockArea">' +
						'<div class="actionCircle"></div>' +	
						'<div class="lockItems">' +
							'<div class="lockCam left"></div>' +
							'<div class="lockLock left"></div>' +
							'<div class="lockUnlock left"></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
	
};
