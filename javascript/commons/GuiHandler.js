/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var deviceDisplay = null;
var GuiHandler = {

	idOfScreenSaver : null,

	initApplication : function() {
		deviceDisplay = $( "#deviceDisplay" );
		
		$( "#deviceOnOffSwitch" ).click(function() {
			GuiHandler.showScreenSaver();
			$( this ).unbind().click(function() {
				GuiHandler.hideScreenSaver();
			});
		});
		
		//GuiHandler.showScreenSaver();
		
	},
	
	showScreenSaver : function() {
		var application = ApplicationScreenHelper.showApplication( GuiHandler.idOfScreenSaver );
		GuiHandler.idOfScreenSaver = GuiHandler.idOfScreenSaver == null ? application.id : null;
	},

	hideScreenSaver : function() {
		ApplicationScreenHelper.hideApplication( GuiHandler.idOfScreenSaver );
	},
	
	
};

$(GuiHandler.initApplication);
