/**
/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */
var Utilities = {

	getTime : function() {
     	var currentTime = new Date();
      	var currentHours = currentTime.getHours();
      	var currentMinutes = currentTime.getMinutes();
      	var currentSeconds = currentTime.getSeconds();
 
      	// Pad the minutes and seconds with leading zeros, if required
      	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
      	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 
 
    	// Convert an hours component of "0" to "12"
      	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
      	// Compose the string for display
      	var currentTimeString = currentHours + ":" + currentMinutes;
       	return currentTimeString
 	}
};