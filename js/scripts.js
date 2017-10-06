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
	
	
	
		$('.scroll-list-item:nth-child(1)').click(function(){
			$('html, body').animate({scrollTop:$('#about').position().top - 40}, 1200);
		});
		
		$('.scroll-list-item:nth-child(2)').click(function(){
			$('html, body').animate({scrollTop:$('#projects').position().top - 40}, 1200);
		});
		
		$('.scroll-list-item:nth-child(3)').click(function(){
			$('html, body').animate({scrollTop:$('#blog').position().top - 40}, 1200);
		});
		
		$('.scroll-list-item:nth-child(4)').click(function(){
			$('html, body').animate({scrollTop:$('#contacts').position().top - 40}, 1200);
		});
		
		/**Переделать с помощью одной функции и вызывом по onclick в html**/
});
