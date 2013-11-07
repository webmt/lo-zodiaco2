// Application Window Component Constructor
function ApplicationWindow() {
    
    // If you don't want margins around the Translucent or Web View you can set the gutter to zero.
    var gutter = Ti.Platform.displayCaps.platformWidth * 0.025;
    //var gutter = 0;
    // The translucent view is a stylish rounded rect behind the web view.
    var translucentViewOn = false;
    // If you want the translucent view or the web view to fade in slowly, set this to true.
    var animationsOn = false;
    // If you don't want a navBar with the corresponding back button you can set this to false.
    // If so, this requires you to have a back button in your HTML on iOS. Android uses standard hardware back button.
    var titleBarOn = false;
    // Set the background color appropriately.
    var backgroundColor = '#e8e8e8';
    // Popup menu/drawer for forward/back. Without this cross-file links will have no way of getting back to the 
    // calling file without a UI in the HTML proper.
    var drawerOn = false;

    var osname = Ti.Platform.osname;

    // Create our main window
    var self = Ti.UI.createWindow({
        // If no image desired, you can remove this line and set the backgroundColor instead.
       // backgroundImage : '/images/background.png',
        navBarHidden : !titleBarOn, // iOS only
 //       barColor : barColor,
        modal : false,
        borderColor : '#ffffff',
        borderWidth : 0,
        backgroundColor : backgroundColor,
        fullscreen: true,
        exitOnClose : true  // Android only
    });

    // Create a WebView, this will host the HTML
    var webView = Ti.UI.createWebView({
        left : 0,
        //top : gutter,
        top: 0,
        right : 0,
        bottom : 0,
        backgroundColor : "#214a85",
        // This allows the translucent view and the background to shine through. You could set this to a standard RGB color and change the opacity if desired.
        //backgroundColor : translucentViewOn ? 'transparent' : backgroundColor,
        //opacity : animationsOn ? 0 : 1,
        enableZoomControls : true, // Android only
        // Default assumes that all HTML is in the HTML folder and the first file is index.html, you can change the next line to suit your HTML.
        url : '/HTML/index.html'
    });
    self.add(webView);
   
    Titanium.App.addEventListener('webview_click_Landing', function(_args) {
    	webView.setUrl('/HTML/index.html'); 
	});
    
    Ti.App.addEventListener('webview_click', function(_args) {
    	webView.setUrl('/HTML/home.html');
	});
	
	
	Ti.App.addEventListener('webview_click_Menu', function(_args) {
		webView.setUrl('/HTML/menu.html'); 
	});
    
    
    
    
    // Load the platform specific UI.
    var ApplicationWindowPlatform;
    if (Ti.Platform.osname == 'mobileweb') {
        // Work around missing platform-specific require feature in Mobile Web.
        ApplicationWindowPlatform = require('mobileweb/ui/ApplicationWindowPlatform');
    } else {
        ApplicationWindowPlatform = require('ui/ApplicationWindowPlatform');
    }
    ApplicationWindowPlatform(self, webView, titleBarOn, drawerOn);

    return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
