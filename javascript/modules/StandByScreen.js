/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var StandByScreen = {
	
	id : "standByScreen",
	
	useCloseAnimation : false,
	
	show : function() {
		ApplicationScreenHelper.showApplication( StandByScreen.id, StandByScreen );
		
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( StandByScreen.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( StandByScreen.id );
	},
	
	created : function() {
	},

	appHTML : '<div id="standByScreen"></div>'

};
