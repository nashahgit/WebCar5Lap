$(document).ready(function(){ 

	/* To set Navbar active */
	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});


	/* Smooth scroll */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});

	/* code for hiding and revealing the BG for navigation */
	// window.onscroll = function(ev) {
	//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	//     	// $('.navbar').fadeOut('slow');
	//     	$('.navbar-default').css({'background-color' : '#3a91eb'});
	//     }
	//     else {
	//     	$('.navbar-default').css({'background-color' : '#ffffff'});
	//     }
	// };

	$(function(){
		$(window).scroll(function(){
			// var aTop = $('#header').height();
			if($(this).scrollTop()>=200){
				// $(".small-owl").fadeIn('slow');
				$('.navbar-default').css({'background-color' : '#7fbb00'}).fadeIn('slow');
				$('.navbar-brand').css({'height' : '40px' , '-webkit-transition' : '0.5s', 'transition' : '0.5s'});
				$('.navbar').css({'min-height' : '50px' , 'padding' : '0.5%' , '-webkit-transition' : '0.5s' , 'transition' : '0.5s' ,
				 'box-shadow' : 'rgba(0, 0, 0, 0.74902) 0px 1px 5px 0px'});
				
			}
			else {
				// $(".small-owl").fadeOut('slow');
				$('.navbar-default').css({'background' : 'none'});
				$('.navbar-brand').css({'height' : '50px'});
				$('.navbar').css({'min-height' : '100px' , 'padding' : '2%'});
				$('.navbar').css({'box-shadow' : 'rgba(0, 0, 0, 0.74902) 0px 0px 0px 0px'});
			}
		});
	});


});