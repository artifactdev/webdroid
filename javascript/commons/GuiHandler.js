/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var deviceDisplay = null;
var deviceInStandBy = false;
var GuiHandler = {

	initApplication : function() {
		deviceDisplay = $( "#deviceDisplay" );
		GuiHandler.initDeviceOnOffSwitch();
		LockScreen.show();
	},
	
	initDeviceOnOffSwitch : function() {
		$( "#deviceOnOffSwitch" ).unbind().click(function() {
			if (deviceInStandBy) {
				StandByScreen.hide();
				LockScreen.show();
			} else {
				LockScreen.hide();
				StandByScreen.show();
			}
			deviceInStandBy = !deviceInStandBy;
		});	
	}
	
};

$(GuiHandler.initApplication);
