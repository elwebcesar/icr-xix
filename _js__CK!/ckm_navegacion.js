/************************************************************************************************
Ckm!
Web, Apps & Multimedia
www.ckm.co
2013
************************************************************************************************/

var hashWeb = window.location.hash;

$(document).ready(function(){
	// -----------------------------------------------
	// SACA HASH
	// -----------------------------------------------						   
	function filterPath(string){
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}

	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');

	//$('a[href^=\\#]').each(function(){
	$("ul#main-menu a[href^=\\#]").each(function(){
		var thisPath = filterPath(this.pathname) || locationPath;
		if (  locationPath == thisPath
		&& (location.hostname == this.hostname || !this.hostname)
		&& this.hash.replace(/#/,'') ) {
		  var $target = $(this.hash), target = this.hash;
		  if (target) {
			var targetOffset = $target.offset().top;
			$(this).click(function(event) {
			  event.preventDefault();
			  $(scrollElem).animate({scrollTop: targetOffset}, 800, function() {
				location.hash = target;
			  });
			});
		  }
		}
	});


	// -----------------------------------------------
	// PONE CLASE EN EL MENU SEGUN EL HASH
	// -----------------------------------------------						   
	//alert("hash: " + hashWeb);
	hashWebA = hashWeb.split('#');
	//alert("hash 2: " + hashWebA[0] + " / " + hashWebA[1]);

	$("ul#main-menu a").removeClass("active");

	if(hashWeb != ""){
		$("a#men_"+hashWebA[1]).addClass("active");
		//$("#"+hashWebA[1] + " .espacio" ).addClass("actual");
		//$("#"+hashWebA[1] + " .espacio" ).animate({height: "250px"}, 50);
	}
	else{
		$("a#men_inicio").addClass("active");
	}


	// -----------------------------------------------
	// SCROLL TO SEGUN ENLACE
	// -----------------------------------------------						   
	function scrollableElement(els) {
		for (var i = 0, argLength = arguments.length; i <argLength; i++) {
		  var el = arguments[i],
			  $scrollElement = $(el);
		  if ($scrollElement.scrollTop()> 0) {
			return el;
		  } else {
			$scrollElement.scrollTop(1);
			var isScrollable = $scrollElement.scrollTop()> 0;
			$scrollElement.scrollTop(0);
			if (isScrollable) {
			  return el;
			}
		  }
		}
		return [];
	}
	

	// -----------------------------------------------
	// PONE CLASE EN AL DAR CLICK
	// -----------------------------------------------						   
	$("ul#main-menu a").click(function(){
		$("ul#main-menu a").removeClass("active");
		$(this).addClass("active");
 	});

	$("a#subir").click(function(){
		$("ul#main-menu a").removeClass("active");
		$("a#men_inicio").addClass("active");
	});
	

	// -----------------------------------------------
	// ONE CLASE EN EL MENU SEGUN SCROLL
	// -----------------------------------------------						   
	//Arreglo para cargar los id
	var optionLocs = new Array();
	
	//Ciclo carga id al arreglo
	$('.contenidos').each(function(index){
		var id = $(this).attr("id");
		optionLocs.push(Array(id));
	});

	var colision = false;

	$(window).on('scroll',function(){
		$("ul#main-menu a").removeClass("active");

		//ciclo segun el arreglo
		$.each(optionLocs,function(num,id){
			colision = $(".menu").hittest("#"+id);
			
			if(colision == true){
				$("a#men_"+id).addClass("active");
			}
		});

		//al inicio del scroll
		if($(window).scrollTop()<=$('#inicio').offset().top){
			$("ul#main-menu a").removeClass("active");
			$("a#men_inicio").addClass("active");
		}	
	});

});

