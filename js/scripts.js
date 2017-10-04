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
	
		$('.link-about').click(function(){
			$('html, body').animate({scrollTop:$('#about').position().top - 80}, 1200);
		});
		
		$('.link-projects').click(function(){
			$('html, body').animate({scrollTop:$('#projects').position().top - 80}, 1200);
		});
		
		$('.link-blog').click(function(){
			$('html, body').animate({scrollTop:$('#blog').position().top - 80}, 1200);
		});
		
		$('.link-contacts').click(function(){
			$('html, body').animate({scrollTop:$('#contacts').position().top - 80}, 1200);
		});
});
