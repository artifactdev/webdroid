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
		application.element.show();
		TaskManager.openTask( application );
		return application;
	},
	
	hideApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application != null) {
			application.element.hide();
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
	}
};