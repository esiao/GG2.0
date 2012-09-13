$(document).ready(function(){
$('#logout').html('Déconnexion');
var url = window.location;
$('#pun-navlinks a[href="'+ url +'"]').addClass('current');
$('#pun-navlinks a').filter(function() {
    return this.href == url;
}).parent().addClass('current')
});

$(function(){
$("a:contains('enregistrer')").addClass('flash');
$('#i_icon_mini_new_message').parent().html('<span class="flash">Messagerie</span>');
});