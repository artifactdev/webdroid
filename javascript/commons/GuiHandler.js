/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var deviceDisplay = null;
var deviceInStandBy = false;
var GuiHandler = {

	idOfLockScreen : null,
	idOfStandByScreen : null,

	initApplication : function() {
		deviceDisplay = $( "#deviceDisplay" );
		GuiHandler.initDeviceOnOffSwitch();
		
		
		//GuiHandler.showScreenSaver();
		
	},
	
	showLockScreen : function() {
		var application = ApplicationScreenHelper.showApplication( GuiHandler.idOfLockScreen );
		GuiHandler.idOfLockScreen = GuiHandler.idOfLockScreen == null ? application.id : GuiHandler.idOfLockScreen;
	},

	hideLockScreen : function() {
		ApplicationScreenHelper.hideApplication( GuiHandler.idOfLockScreen );
	},
	
	initDeviceOnOffSwitch : function() {
		$( "#deviceOnOffSwitch" ).unbind().click(function() {
			if (deviceInStandBy) {
				GuiHandler.hideStandByScreen();
				GuiHandler.showLockScreen();
			} else {
				GuiHandler.showStandByScreen();
			}
			deviceInStandBy = !deviceInStandBy;
		});	
	},
	
	showStandByScreen : function() {
		GuiHandler.hideLockScreen();
		var application = ApplicationScreenHelper.showApplication( GuiHandler.idOfStandByScreen );
		GuiHandler.idOfStandByScreen = GuiHandler.idOfStandByScreen == null ? application.id : GuiHandler.idOfStandByScreen;
		application.element.addClass( "standByScreen" );
	},

	hideStandByScreen : function() {
		ApplicationScreenHelper.hideApplication( GuiHandler.idOfStandByScreen );
	}
	
};

$(GuiHandler.initApplication);
