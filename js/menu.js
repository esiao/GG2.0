$(document).ready(function(){
var url = window.location;
$('#pun-navlinks a[href="'+ url +'"]').addClass('current');
$('#pun-navlinks a').filter(function() {
    return this.href == url;
}).parent().addClass('current')
});

$(function(){
$("a:contains('enregistrer')").addClass('flash');
$("a:contains('Déconnexion')").addClass('flash');
});