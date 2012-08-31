$(document).ready(function(){
	var dleft = $('#pun-navlinks3 li.active').offset().left - $('#pun-navlinks3').offset().left;
	var dwidth=$('#pun-navlinks3 li.active').outerWidth()+"px";
	$('.floatr').css({"left":dleft+"px","width":dwidth});
	$('#pun-navlinks3 li').hover(
		function(){
			var left= $(this).offset().left - $('#pun-navlinks3').offset().left;
			var width=$(this).outerWidth()+"px";
			$(this).parent('ul').next('div.floatr').css({"width":width,"left":left})
			;},
		function(){
			var left=$(this).siblings('li.active').offset().left-($(this).parents('#pun-navlinks3').offset().left);
			var width=$(this).siblings('li.active').outerWidth()+"px";
			$(this).parent('ul').next('div.floatr').css({"width":width,"left":left});
		}
	).click(function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
});