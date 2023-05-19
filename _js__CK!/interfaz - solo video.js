/* *******************************************************************************
ckm.co
*********************************************************************************/
// SmartMenus init
$(function() {
	$('#main-menu').smartmenus({
		subMenusSubOffsetX: 1,
		subMenusSubOffsetY: -8
	});
	$('#main-menu').smartmenus('keyboardSetHotkey', '123', 'shiftKey');
});

// SmartMenus mobile menu toggle button
$(function(){
	var $mainMenuState = $('#main-menu-state');
	if ($mainMenuState.length){
		// animate mobile menu
		$mainMenuState.change(function(e){
			var $menu = $('#main-menu');
			if (this.checked){
				$menu.hide().slideDown(250, function() { $menu.css('display', ''); });
			} else {
				$menu.show().slideUp(250, function() { $menu.css('display', ''); });
			}
		});
		// hide mobile menu beforeunload
		$(window).bind('beforeunload unload', function(){
			if ($mainMenuState[0].checked){
				$mainMenuState[0].click();
			}
		});
	}
});


$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		},300 );
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1800){
			$('.ir-arriba').fadeIn("slow");
		} else {
			$('.ir-arriba').fadeOut("slow");
		};
	});
});


$.fn.equalizeHeights = function(){
	return this.height( Math.max.apply(this, $(this).map(function(i,e){ return $(e).height() }).get() ) );
}
/*
$('.sidebar, .content').equalizeHeights();
*/


$(document).ready(function(){
	$("button").click(function(event){
		var video = $(this).data('video');
		$(".modal .info").hide();
		//var mostrar = $(this).data('mostrar');
		//$("."+mostrar).show();
		
		$(".modal .info").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>');
		$(".modal .info").show();

		$(".overlay").fadeIn("normal", function(){
			$(".modal").fadeIn("normal");
		});
	});

	$(".cerrar").click(function(){
		$(".modal").fadeOut("normal", function(){
			$(".overlay").fadeOut("normal");
		});
		$('.info iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	});
});

/*
<div><a href="javascript:;" class="play-video">Play Video</a></div>
<div><a href="javascript:;" class="stop-video">Stop Video</a></div>
<div><a href="javascript:;" class="pause-video">Pause Video</a></div>
<iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/ooIiX6YVPhc?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>

$(document).ready(function(){
	$('a.play-video').click(function(){
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	});
	
	$('a.stop-video').click(function(){
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	});
	
	$('a.pause-video').click(function(){
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	});
});
*/