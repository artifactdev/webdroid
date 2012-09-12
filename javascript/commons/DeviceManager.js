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
				TaskManager.hideActiveTask();
				StandByScreen.show();
			}
			deviceInStandBy = !deviceInStandBy;
		});	
	},
	
	unlockDevice : function() {
		LockScreen.hide();
		if (TaskManager.activeTask != null) {
			//activeTask vlt muss man hier nichts mehr machen
			TaskManager.showActiveTask();
		} else {
			//show dashboard
			DashBoard.show();
		}
	}
	
};

$(DeviceManager.initApplication);
