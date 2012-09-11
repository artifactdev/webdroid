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
		var application = { id : id, element : element };
		screenHandler.created( application );
		return application;
	},
	
	closeApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application != null) {
			application.hide();
		}
	},
	
	showApplication : function( id, screenHandler ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application == null) {
			application = ApplicationScreenHelper.createNewApplication( id, screenHandler );
		}
		application.element.show();
		return application;
	},
	
	hideApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application != null) {
			application.element.hide();
		}
	},
	
	findApplication : function( id ) {
		if (id == undefined || id == null) {
			return null;
		}
		
		var applicationElement = $( "#" + id );
		if (applicationElement.length > 0) {
			return { id : id, element : applicationElement };
		}
		return null;
	}
};