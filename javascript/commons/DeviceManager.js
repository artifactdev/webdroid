﻿/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var deviceDisplay = null;
var deviceInStandBy = false;
var DeviceManager = {

	initApplication : function() {
		deviceDisplay = $( "#deviceDisplay" );
		DeviceManager.initDeviceOnOffSwitch();
		LockScreen.show();
				
		DeviceManager.refreshAppShortCutListeners();
		
		$( "#deviceHomeButton" ).unbind().click(function() {
			ApplicationScreenHelper.hideCurrentApplication();
			DashBoard.show();
		});
		
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
	},

	openCam : function() {
		LockScreen.hide();
		CamApp.show();
	},

	refreshAppShortCutListeners : function() {
		$( ".deviceAppShortCut" ).click(function() {
			var handlerName = $( this ).attr("data-webdroid-handler");
			eval( handlerName + ".show()" );
		});
	}
	
};

$(DeviceManager.initApplication);
