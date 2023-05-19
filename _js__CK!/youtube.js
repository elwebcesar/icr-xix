/**
 * YT.Player initialized by onYouTubeIframeAPIReady().
 */
var youTubePlayer;


function onYouTubeIframeAPIReady(){
	'use strict';

	function onReady(event) {
		var player = event.target;
	}

    youTubePlayer = new YT.Player('YouTube-player',{
		//videoId: '9t7HxGW8ACo',
		videoId: videoId,
		height: '100%',
		width: '100%',
		//name: name,
		playerVars: {
			'autohide': 1,
			'cc_load_policy': 0,
			'controls': 1,
			'disablekb': 0,
			'iv_load_policy': 0,
			'modestbranding': 0,
			'rel': 0,
			'showinfo': 0,
			'autoplay':1,
			'start': 0
		},
		events: {
			'onReady': onReady
		}
	});

    // Add private data to the YouTube object
    youTubePlayer.personalPlayer = {
		'currentTimeSliding': false,
        'errors': []
	};
}

function youTubePlayerActive() {
	'use strict';
	
	return youTubePlayer && youTubePlayer.hasOwnProperty('getPlayerState');
}


function youTubePlayerPause(){
	'use strict';
	
	if (youTubePlayerActive()){
		youTubePlayer.pauseVideo();
	}
}

function youTubePlayerPlay(){
	'use strict';
	
	if (youTubePlayerActive()){
		youTubePlayer.playVideo();
	}
}

 
function youTubePlayerStop(){
	'use strict';

	if (youTubePlayerActive()) {
		youTubePlayer.stopVideo();
		//youTubePlayer.clearVideo();
	}
}


(function (){
	'use strict';

	function init(){
		// Load YouTube library
		var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		var first_script_tag = document.getElementsByTagName('script')[0];
		first_script_tag.parentNode.insertBefore(tag, first_script_tag);
	}
	
	
	if (window.addEventListener){
		window.addEventListener('load', init);
	}
	else if (window.attachEvent){
		window.attachEvent('onload', init);
	}
}());
