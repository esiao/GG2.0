$(function(){
        //Commenté par Xev', pour tester
	/*$('a:contains("~")').each(
	function(){
		var color = $(this).html().substring(0,7);
		color = color.replace("~","#");
		$(this).html('<span style="color: '+color+';">'+$(this).html().substring(7)+'</span>');
	});*/

        //ce code, avec regex, et possibilité de mettre plusieurs couleurs
	$('a:contains("~")').html(function(i, text){
		return 	text.replace(/~([0-9A-Fa-f]{6})([^~.]*)/g, '<span style="color: #$1">$2</span>');
	});
	$('title').html(function(i, text){
		return 	text.replace(/~([0-9A-Fa-f]{6})/g,'');
	});
});