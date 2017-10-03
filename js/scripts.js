$(document).ready(function () {

		

		body = $("body");
		$(".menu__button").click(function (){
			
			body.addClass("fullscreen-menu");
			body.addClass("modal-open");
			
		});
		
		$(".menu-close").click(function (){
			
			body.removeClass("fullscreen-menu");
			body.removeClass("modal-open");
			
		});
		
		$(".mobile-menu__link").click(function (){
			
			body.removeClass("fullscreen-menu");
			body.removeClass("modal-open");
			
		});

});
