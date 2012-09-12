/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var deviceDisplay = null;
var deviceInStandBy = false;
var DeviceManager = {

	initApplication : function() {
		deviceDisplay = $( "#deviceDisplay" );
		DeviceManager.initDeviceOnOffSwitch();
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
	},
	
	unlockDevice : function() {
		LockScreen.hide();
		// TODO
	}
	
};

$(DeviceManager.initApplication);
