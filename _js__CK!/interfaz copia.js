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
		},2000 );
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
	$(".lineup button").click(function(event){
		var banda = $(this).text();
		var video = $(this).data('video');
		var resena = $(this).data('resena');

		var web = $(this).data('web');
		var fb = $(this).data('fb');
		var tw = $(this).data('tw');
		var ig = $(this).data('ig');
		var yt = $(this).data('yt');
		var sp = $(this).data('sp');
		var so = $(this).data('so');
		var bc = $(this).data('bc');

		$(".modal .exper").hide();
		$(".modal .info").hide();
		//var mostrar = $(this).data('mostrar');
		//$("."+mostrar).show();
		
		html = '<h2>'+banda+'</h2><iframe width="100%" height="50%" src="https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>'+resena+'<hr />';
		if(web!=''){
			html = html+'<a href="https://'+web+'" target="_blank"><img src="_interfAz_CK!/web.svg" alt="website" /></a>';
		}
		if(yt!=''){
			html = html+'<a href="https://www.youtube.com/'+yt+'" target="_blank"><img src="_interfAz_CK!/youtube.svg" alt="youtube" /></a>';
		}
		if(sp!=''){
			html = html+'<a href="https://open.spotify.com/'+sp+'" target="_blank"><img src="_interfAz_CK!/spotify.svg" alt="spotify" /></a>';
		}
		if(so!=''){
			html = html+'<a href="https://soundcloud.com/'+so+'" target="_blank"><img src="_interfAz_CK!/soundcloud.svg" alt="soundcloud" /></a>';
		}
		if(fb!=''){
			html = html+'<a href="https://www.facebook.com/'+fb+'" target="_blank"><img src="_interfAz_CK!/facebook.svg" alt="facebook" /></a>';
		}
		if(tw!=''){
			html = html+'<a href="https://www.twitter.com/'+tw+'" target="_blank"><img src="_interfAz_CK!/twitter.svg" alt="twitter" /></a>';
		}
		if(ig!=''){
			html = html+'<a href="https://www.instagram.com/'+ig+'" target="_blank"><img src="_interfAz_CK!/instagram.svg" alt="instagram" /></a>';
		}
		if(bc!=''){
			html = html+'<a href="https://'+bc+'.bandcamp.com" target="_blank"><img src="_interfAz_CK!/bandcamp.svg" alt="bandcamp" /></a>';
		}

		/*
		if(resena==''){
			html = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>';
		}
		else if(video==''){
			html = '<h2>'+banda+'</h2>'+resena;
		}
		else{
			html = '<h2>'+banda+'</h2><iframe width="100%" height="50%" src="https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>'+resena;
		}
		*/

		$(".modal .info").html(html);
		
		//$(".modal .info").html('<h2>'+banda+'</h2><iframe width="100%" height="50%" src="https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>'+resena);
		//$(".modal .info").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+video+'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>');
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


	$(".experiencia button").click(function(event){
		var titulo = $(this).text();
		var dispo = $(this).data('dispo');

		$(".modal .info, .modal .exper .ex_info").hide();
		
		$(".modal .exper .ex_ico").html('<img src="_interfAz_CK!/'+dispo+'.svg" alt="'+titulo+'" /><h2>'+titulo+'</h2>');
		$(".modal .exper").show();
		$(".modal .exper ."+dispo).show();

		$(".overlay").fadeIn("normal", function(){
			$(".modal").fadeIn("normal");
		});
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
