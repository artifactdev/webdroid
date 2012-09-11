﻿/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var DashBoard = {

	id : "",
	
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

	appHTML : '<div id="lockScreen" class="deviceApplication">' +
		'<div class="infoBar">' +
			'<ul class="notification"></ul>' + 
			'<ul class="systemInfo"><li>12:45</li><li>Akku</li><li>Empfang</li></ul>' + 
		'</div>' +
		'<div class="appArea">' +
			'<div class="time">12:00</div>' +
			'<div class="date">Di., 11. September</div>' + 
			'<div class="weather"></div>' + 
			'<div class="lockArea">' + 
			'<ul class="lockItems">' + 
				'<li class="lockCam"></li>' + 
				'<li class="lockLock"></li>' + 
				'<li class="lockUnlock"></li>' + 
			'</ul>' + 
		'</div>' + 
	'</div>' + 
	'</div>'

};