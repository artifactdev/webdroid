/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var AppLauncher = {

	id : "appLauncher",
	
	show : function() {
		ApplicationScreenHelper.showApplication( AppLauncher.id, AppLauncher );
		AppLauncher.refreshLockItem();
	},
	
	refreshLockItem : function() {
		$( "#lockItem" ).removeAttr("style");
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( AppLauncher.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( AppLauncher.id );
	},
	

	created : function( application ) {
		DeviceManager.refreshAppShortCutListeners();
	},

	appHTML : '<div id="AppLauncher" class="deviceApplication">' +
				'<div class="infoBar">' +
					'<ul class="notification"></ul>' +
					'<ul class="systemInfo">' +
						'<li class="time"></li>' +
						'<li class="battery">Akku</li>' +
						'<li class="network">Empfang</li>' +
					'</ul>' +
				'</div>' +
				'<div class="launcherArea">' +
					'<ul class="launcherHeader">' +
						'<li class="left active">Apps</li>' +
						'<li class="left">Widgets</li>' +
						'<li class="right">PlayStore</li>' +
					'</ul>' +
					'<ul class="appGrid"	>' + 
						'<li>Browser</li>' +
						'<li>Maps</li>' +
						'<li>Kalender</li>' +
						'<li>Kontakte</li>' +
						'<li>Wetter</li>' +
						'<li class="deviceAppShortCut" data-webdroid-handler="ToDoApp">ToDo</li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
						'<li></li>' +
					'</ul>' +
				'</div>' +
			'</div>'
	
};
