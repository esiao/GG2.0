$(document).ready(function(){
	var dleft=$('#pun-navlinks3 li.active').offset().left- $('#pun-navlinks3').offset().left;
	var dwidth=$('#pun-navlinks3 li.active').width()+"px";
	$('.floatr').css({"left":dleft+"px","width":dwidth});
	$('li').hover(function(){
		var left=$(this).offset().left-($(this).parents('#pun-navlinks3').offset().left+ 15);
		var width=$(this).width()+"px";
		var sictranslate="translate("+left+"px, 0px)";$(this).parent('ul').next('div.floatr').css({"width":width,"-webkit-transform":sictranslate,"-moz-transform":sictranslate})
		;},function(){
			var left=$(this).siblings('li.active').offset().left-($(this).parents('#pun-navlinks3').offset().left+ 15);
			var width=$(this).siblings('li.active').width()+"px";
			var sictranslate="translate("+left+"px, 0px)";
			$(this).parent('ul').next('div.floatr').css({"width":width,"-webkit-transform":sictranslate,"-moz-transform":sictranslate});}).click(function(){$(this).siblings('li').removeClass('active');$(this).addClass('active');return false;});
});