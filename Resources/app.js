/*
 * HTML Application Template:
 * A basic starting point for your application.  Mostly a blank canvas with a web view.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later'); 
} else {
	//require and open top level UI component
	var ApplicationWindow = require('ui/ApplicationWindow');
	new ApplicationWindow().open();
}

