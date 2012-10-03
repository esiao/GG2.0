$(function(){
	$('.vote-no-bar').html('');
	$('.tdtopics div').html(function(i, text){
		return 	text.replace('[','');
	});
	$('.tdtopics div').html(function(i, text){
		return 	text.replace(']','');
	});
	$('.profile_field_list li').each(function(){
	var img = $(this).html();
	$(this).html('<img src='+img+'/>');
	});
});