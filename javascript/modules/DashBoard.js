/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var DashBoard = {

	id : "dashBoard",
	
	show : function() {
		ApplicationScreenHelper.showApplication( DashBoard.id, DashBoard );	
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( DashBoard.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( DashBoard.id );
	},
	
	created : function() {
		// Uhrzeit und so
	},

	appHTML : '<div id="dashBoard" class="deviceApplication">' +
		'<div class="infoBar">' +
			'<ul class="notification"></ul>' +
			'<ul class="systemInfo">' +
				'<li class="battery">Akku</li>' +
				'<li class="network">Empfang</li>' +
			'</ul>' +
		'</div>' +
		'<div class="appArea">asdasd' +
		'</div>' + 
	'</div>' + 
	'</div>'

};