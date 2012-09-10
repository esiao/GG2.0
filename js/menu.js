$(document).ready(function(){
$('#pun-navlinks ul li:first-child').remove();
$('#pun-navlinks').html($('#pun-navlinks').html().replace(/&nbsp;/g,''));
$('#pun-navlinks3 ul li:first-child').remove();
$('#pun-navlinks3').html($('#pun-navlinks3').html().replace(/&nbsp;/g,''));
$('#pun-navlinks3 ul li:nth-child(2) a').html($('#pun-navlinks3 ul li:nth-child(2) a').html().replace(/Accueil/g,'Forum'));
$('#pun-navlinks ul li:first-child a').html($('#pun-navlinks ul li:first-child a').html().replace(/Portail/g,''));
$('#pun-navlinks ul li:nth-child(2) a').html($('#pun-navlinks ul li:nth-child(2) a').html().replace(/Accueil/g,'Forum'));
});

$(function(){
var url = window.location;
$('#pun-navlinks a[href="'+ url +'"]').addClass('current');
$('#pun-navlinks a').filter(function() {
    return this.href == url;
}).addClass('current')
});

$(function(){
var url = window.location;
$('#pun-navlinks3 a[href="'+ url +'"]').addClass('active');
$('#pun-navlinks3 a').filter(function() {
    return this.href == url;
}).parent().addClass('active')
});

$(function(){
$("a:contains('enregistrer')").addClass('flash');
$("a:contains('Déconnexion')").addClass('flash');
});