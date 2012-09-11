/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var ApplicationScreenHelper = {

	applicationCounter : 0,

	createNewApplication : function() {
		var id = ApplicationScreenHelper.applicationCounter++;
		var element = $( "<div />", {"id" : "deviceApplication_" + id , "class" : "deviceApplication"}).appendTo( deviceDisplay );
		return { id : id, element : element };
	},
	
	closeApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application != null) {
			application.hide();
		}
	},
	
	showApplication : function( id ) {
		var application = ApplicationScreenHelper.findApplication( id );
		if (application == null) {
			application = ApplicationScreenHelper.createNewApplication();
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
		
		var applicationElement = $( "#deviceApplication_" + id );
		if (applicationElement.length > 0) {
			return { id : id, element : applicationElement };
		}
		return null;
	}
};