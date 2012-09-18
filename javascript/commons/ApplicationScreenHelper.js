/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var ApplicationScreenHelper = {

	applicationCounter : 0,

	createNewApplication : function( id, screenHandler ) {
		var application = null;
		if (id == undefined || id == null) {
			id = "deviceApplication_" + ApplicationScreenHelper.applicationCounter;
			ApplicationScreenHelper.applicationCounter++;
		} else {
			application = ApplicationScreenHelper.findApplication( id );
			if (application != null) {
				return application;
			}
		}
		var element = $( screenHandler.appHTML ).appendTo( deviceDisplay ).addClass("deviceApplication");
		var application = { id : id, element : element, handler : screenHandler};
		screenHandler.created( application );
		return application;
	},
	
	closeApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application != null) {
			application.hide();
			TaskManager.killTask( application );
		}
	},
	
	showApplication : function( id, screenHandler ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application == null) {
			application = ApplicationScreenHelper.createNewApplication( id, screenHandler );
		}
		ApplicationScreenHelper.hideCurrentApplication();
		ApplicationScreenHelper.fadeIn( application );
		TaskManager.openTask( application );
		return application;
	},
	
	hideApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application != null) {
			ApplicationScreenHelper.fadeOut( application );
			TaskManager.closeTask( application );
		}
	},
	
	hideCurrentApplication : function() {
		if (TaskManager.activeTask != null) {
			var application = ApplicationScreenHelper.findApplication( TaskManager.activeTask.id );
			ApplicationScreenHelper.hideApplication( TaskManager.activeTask.id );
			TaskManager.closeTask( application );
		}
	},
	
	findApplication : function( id ) {
		if (id == undefined || id == null) {
			return null;
		}
		return TaskManager.findTask( id );
	},
	
	fadeIn : function( application ) {
		var element = application.element;
		if (!application.handler.useCloseAnimation) {
			element.show();
			return;
		}
		var hOrg = element.height();
		var wOrg = element.width();
		element.css({
			"width" : 10,
			"height": 15,
			"marginLeft": 170,
			"marginTop" : 280
		});
		
		element.stop(true, true).show().animate({
			"width" : wOrg,
			"height": hOrg,
			"marginLeft": 0,
			"marginTop" : 0
		});
	},
	
	fadeOut : function( application ) {
		var element = application.element;
		if (!application.handler.useCloseAnimation) {
			element.hide();
			return;
		}
		var hOrg = element.height();
		var wOrg = element.width();
		element.stop(true, true).animate({
			"width" : 10,
			"height": 15,
			"marginLeft": 170,
			"marginTop" : 280
		}, function() {
			element.hide().css({
				"width" : wOrg,
				"height": hOrg
			});
		});
	}

};