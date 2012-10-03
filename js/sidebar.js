/*$(function(){
	$('#switch-sidebar').click(function () {
		$('#switch-sidebar').html(function(index, str) {
			if (str === "Cacher la barre latérale") {
				$('#right').css('opacity','0');
				$('#right').css('width','0');
				$('#content-container div#container').css('margin-right','0');
				$('#content-container div#content').css('margin-right','0');
				$(this).html('Afficher la barre latérale');
			}
			else {
				$('#right').css('opacity','+=100');
				$('#right').css('width','180');
				$('#content-container div#container').css('margin-right','-=190');
				$('#content-container div#content').css('margin-right','+=190');
				$(this).html('Cacher la barre latérale');
			}
		});
	});
});*/

var showSidebar = localStorage.GalaxyGraphSideBar === undefined ? true : localStorage.GalaxyGraphSideBar === 'true';
showSidebar || $('head').append('<style type="text/css">#right{margin-right: -190px; opacity: 0;} #content{margin-right: 0 !important;}</style>');
$(function(){
	var sidebar = $('#right'), content = $("#content");
	$('#switch-sidebar').click(function(e){
		e.preventDefault();
		if(showSidebar){
			sidebar.css({marginRight: '-190px', opacity: 0});
			content.attr('style', 'margin-right: 0 !important;');
		}
		else{
			sidebar.css({marginRight: 0, opacity: 1});
			content.attr('style', 'margin-right: 190px !important;');
		}
		showSidebar = !showSidebar;
		localStorage.GalaxyGraphSideBar = showSidebar;
	});
});