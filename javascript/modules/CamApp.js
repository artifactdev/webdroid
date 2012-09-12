/**
 * (c) 2012 Markus Jahn / Jeremias Arnstadt
 */

var CamApp = {

	id : "camScreen",
	
	show : function() {
		ApplicationScreenHelper.showApplication( CamApp.id, CamApp );
		
	},
	
	hide : function() {
		ApplicationScreenHelper.hideApplication( CamApp.id );
	},
	
	close : function() {
		ApplicationScreenHelper.closeApplication( CamApp.id );
	},
	

	created : function( application ) {
		// requestAnimationFrame shim
		(function() {
		  var i = 0,
		    lastTime = 0,
		    vendors = ['ms', 'moz', 'webkit', 'o'];
		  
		  while (i < vendors.length && !window.requestAnimationFrame) {
		    window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		    i++;
		  }
		  
		  if (!window.requestAnimationFrame) {
		    window.requestAnimationFrame = function(callback, element) {
		      var currTime = new Date().getTime(),
		        timeToCall = Math.max(0, 1000 / 60 - currTime + lastTime),
		        id = setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
		      
		      lastTime = currTime + timeToCall;
		      return id;
		    };
		  }
		}());

		var App = {
		  start: function(stream) {
		    App.video.addEventListener('canplay', function() {
		      App.video.removeEventListener('canplay');
		      setTimeout(function() {
		        App.video.play();
		        App.canvas.style.display = 'inline';
		        App.canvas.width = App.video.videoWidth;
		        App.canvas.height = App.video.videoHeight;
		        App.backCanvas.width = App.video.videoWidth / 4;
		        App.backCanvas.height = App.video.videoHeight / 4;
		        App.backContext = App.backCanvas.getContext('2d');
		      
		        var w = 300 / 4 * 0.8,
		          h = 270 / 4 * 0.8;
		      
		        App.comp = [{
		          x: (App.video.videoWidth / 4 - w) / 2,
		          y: (App.video.videoHeight / 4 - h) / 2,
		          width: w, 
		          height: h,
		        }];
		      
		        App.drawToCanvas();
		      }, 500);
		    }, true);
		    
		    var domURL = window.URL || window.webkitURL;
		    App.video.src = domURL ? domURL.createObjectURL(stream) : stream;
		  },
		  denied: function() {
		    App.info.innerHTML = 'Camera access denied!<br>Please reload and try again.';
		  },
		  error: function(e) {
		    if (e) {
		      console.error(e);
		    }
		    App.info.innerHTML = 'Please go to about:flags in Google Chrome and enable the &quot;MediaStream&quot; flag.';
		  },
		  drawToCanvas: function() {
		    requestAnimationFrame(App.drawToCanvas);
		    
		    var video = App.video,
		      ctx = App.context,
		      backCtx = App.backContext,
		      m = 4,
		      w = 4,
		      i,
		      comp;
		    
		    ctx.drawImage(video, 0, 0, App.canvas.width, App.canvas.height);
		    
		    backCtx.drawImage(video, 0, 0, App.backCanvas.width, App.backCanvas.height);
		    
		    comp = ccv.detect_objects(App.ccv = App.ccv || {
		      canvas: App.backCanvas,
		      cascade: cascade,
		      interval: 4,
		      min_neighbors: 1
		    });
		    
		    if (comp.length) {
		      App.comp = comp;
		    }
		  }
		};

		App.init = function() {
		  App.video = document.createElement('video');
		  App.backCanvas = document.createElement('canvas');
		  App.canvas = document.querySelector('#output');
		  App.canvas.style.display = 'none';
		  App.context = App.canvas.getContext('2d');
		  App.info = document.querySelector('#info');
		  
		  navigator.getUserMedia_ = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		  
		  try {
		    navigator.getUserMedia_({
		      video: true,
		      audio: false
		    }, App.start, App.denied);
		  } catch (e) {
		    try {
		      navigator.getUserMedia_('video', App.start, App.denied);
		    } catch (e) {
		      App.error(e);
		    }
		  }
		  
		  App.video.loop = App.video.muted = true;
		  App.video.load();
		};

		App.init();
				
	},

	appHTML : '<div id="camScreen" class="deviceApplication">' +
				'<div class="infoBar">' +
					'<ul class="notification"></ul>' +
					'<ul class="systemInfo">' +
						'<li class="time"></li>' +
						'<li class="battery">Akku</li>' +
						'<li class="network">Empfang</li>' +
					'</ul>' +
				'</div>' +
				'<div class="appArea">' +
					'<canvas id="output"></canvas>' +
					'<div class="camControl">' +
						'<div class="camButton"></div>' +
					'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
	
};
