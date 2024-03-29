window.onload = function () { 
	resize();
	$('#preloader').fadeOut('slow', function(){
		$(this).remove();
	});
}

$(document).ready(function() {

	init();

	header();

	newspaper();

	glitch();

	typeit();

	parallax();

});

function init(){
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Who', 'Goal', 'Academiclevel', 'Achievements', 'Skills', 'Info', 'Bye'],
		onLeave: function(index, nextIndex, direction){
			if( $(window).scrollTop() <= 50) {
				$('.wow').removeClass('animated');
				$('.wow').removeAttr('style');
				new WOW().init();
			}
			if (direction == 'down'){
				if (index == 4){
					$("#titlecontent").addClass("scroll");
				}
				else{
					if (index == 5){
						$("#typeit").remove();
						$("#crt").html("<h1 id='typeit'></h1>");
						typeit();
					} 
					$("#titlecontent").removeClass("scroll");
				} 
			}
			else{
				if (index == 6){
					$("#titlecontent").addClass("scroll");
				}
				else{
					if (index == 7){
						$("#typeit").remove();
						$("#crt").html("<h1 id='typeit'></h1>");
						typeit();
					} 
					$("#titlecontent").removeClass("scroll");
				} 
			}
		}
	});

	new WOW().init();
}

function newspaper(){
	$(".article-3-link").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$("#the-prophet").toggleClass("view-article-3");
	});
}

function header(){
	var header = $('#header');
	var audio = $('audio');
	$('#header h1').click(function(){
		toggleFullScreen();
		audio.trigger('play');
	})

	$('#header h1')
	.mouseover(function() {
		audio.trigger('play');
		header.css('animation-play-state','running');
		$('#header #touchme .wobble').addClass('disable');
		$('#header #touchme .rotateOutDownLeft').removeClass('disable');
		$('#header #touchme .rotateInUpLeft').addClass('disable');
		$('#header #dance img').attr('src', 'images/favicon.gif');
		$('#header #loader .slideInRight').removeClass('disable');
		$('#header #loader .lightSpeedOut').addClass('disable');
	})
	.mouseout(function() {
		audio.trigger('pause');
		header.css('animation-play-state','paused');
		$('#header #dance img').attr('src', 'images/favicon.png');
		$('#header #touchme .rotateOutDownLeft').addClass('disable');
		$('#header #touchme .rotateInUpLeft').removeClass('disable');
		setTimeout(function() {
			$('#header #touchme .rotateInUpLeft').addClass('disable');
			if (header.css('animation-play-state')=='paused'){
				$('#header #touchme .wobble').removeClass('disable');
			}
			$('#header #loader .lightSpeedOut').addClass('disable');
		}, 1000);
		$('#header #loader .slideInRight').addClass('disable');
		$('#header #loader .lightSpeedOut').removeClass('disable');
	});
}

function glitch(){
	for(i=0;i<4;i++){
		$('.glitch .text span').eq(0).clone().prependTo('.glitch .text');
	}
}

function typeit(){
	new TypeIt('#typeit', {
		speed: 45
	})
	.type('<span class="s1">About me?</span>')
	.pause(500)
	.break()
	.type('<span class="s2 s"> Phan Van Thinh</span>')
	.break()
	.type('<span class="s3">call me: </span>')
	.type('<a class="s3" href="tel:0774986077">077 498 6077</a>')
	.break()
	.type('<span class="s3">mail me: </span>')
	.type('<a href="mailto:phanvanthinh.dev@gmail.com">phanvanthinh.dev</a>')
	.type('<a href="mailto:phanvanthinh.dev@gmail.com" class="hide">@gmail.com</a>')
	.break()
	.type('<span class="s3">find</span>')
	.type('<span class="s3 hide"> me</span>')
	.type('<span class="s3"> on Facebook: </span>')
	.type('<a href="https://fb.com/thinhthongthai.vip" target="_blank">thinhthongthai.vip</a>')
	.break()
	.type('<span class="s3">find me on Skype: </span>')
	.type('<a href="skype:tv.cntt.95?call">tv.cntt.95</a>')
	.break()
	.type('<span class="s4">what r u waiting for?</span>')
	.break()
	.type('<span class="s5 hide">keeeep scrolliiiiinnnnnngggggg........</span>')
}

function parallax(){
	$('.parallax').parallax({
		invertX: true,
		invertY: true,
		scalarX: 10,
		frictionY: .1
	});
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  resize();
}

$(window).on('resize',function(){
	resize();
});

function resize(){
	var wsize = $(window).width()/1361;
	var hsize = $(window).height()/647;
	var hfont = wsize*5;
	$("#header h1").css("font-size", hfont + "em");
	var ttop = $("#header h1").offset().top - $("#header h1").height() ; 
	$("#touchme").css("top", ttop + "px");
	var twidth = wsize*230;
 	$("#touchme img").css("width", twidth + "px");
 	var dwidth = wsize*250;
	$("#dance img").css("width", dwidth + "px");
	var gfont = wsize*4;
	$(".glitch span").css("font-size", gfont + "em");
	var himg = $(".me .img").width()*2.5 + 30;
	$(".me .img").css("height", himg + "px");
	var whfont = wsize*2;
	$(".windows-inner h1").css("font-size", whfont + "em");
	$(".windows-inner p").css("font-size", wsize + "em");
	var sheight = hsize*1470;
	$("#titles").css("height", sheight + "px");
	var sperspective = hsize*256;
	$("#titles").css("transform", "perspective(" + sperspective + "px) rotateX(23deg)");
}



