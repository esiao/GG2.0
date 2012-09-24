$(function(){
	$('a:contains("~")').each(
	function(){
		var color = $(this).html().substring(0,7);
		color = color.replace("~","#");
		$(this).html('<span style="color: '+color+';">'+$(this).html().substring(7)+'</span>');
	});
});