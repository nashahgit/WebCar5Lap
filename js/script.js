$(document).ready(function(){ 

	 $(function(){ 
	     var navMain = $("#navbar");
	     navMain.on("click", "a", function () {
	         $(".navbar-toggle").collapse('hide');
	     });
	 });

	 /* For tool tip */
	 $('[data-toggle="tooltip"]').tooltip(); 

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

	$(function(){
		$(window).scroll(function(){
			// var aTop = $('#header').height();
			if($(this).scrollTop()>=100){
				// $(".small-owl").fadeIn('slow');
				// $('.navbar-default').css({'background-color' : '#FFFFFF'}).fadeIn('slow');
				$('.navbar-brand').css({'height' : '40px' , '-webkit-transition' : '0.5s', 'transition' : '0.5s'});
				$('.navbar').css({'min-height' : '50px' , 'padding' : '0.5%' , '-webkit-transition' : '0.5s' , 'transition' : '0.5s'});
				
			}
			else {
				// $(".small-owl").fadeOut('slow');
				// $('.navbar-default').css({'background' : 'none'});
				$('.navbar-brand').css({'height' : '50px'});
				$('.navbar').css({'min-height' : '50px' , 'padding' : '1%'});
				// $('.navbar').css({'box-shadow' : 'rgba(0, 0, 0, 0.74902) 0px 0px 0px 0px'});
			}
		});
	});

	/* To set the trawler window height*/
	var windowHeight = $(window).height();
	var navbarHeight = $(".navbar").height();
	var setHeight = windowHeight - 100;
	$(".trawler").height(setHeight);
	$(".trawler").css({'padding-top':'100px'});

	/* Scroll reveal code*/
	window.sr = ScrollReveal({duration: 300, opacity: 0, reset: false});
	// sr.reveal('.trawler',{origin: 'left', distance: '100px', delay:400});
	sr.reveal('.tagline',{origin: 'right', distance: '100px', delay:600});
	sr.reveal('.app_badge',{origin: 'right', distance: '100px', delay:800});

	sr.reveal('.da_head',{origin: 'bottom', distance: '100px', delay:400});
	sr.reveal('.da_para',{origin: 'bottom', distance: '100px', delay:400});
	sr.reveal('.right_of_abtus',{origin: 'bottom', distance: '100px', delay:600});

	sr.reveal('.adv_head',{origin: 'bottom', distance: '100px', delay:400});
	// sr.reveal('.adv_p1',{origin: 'right', distance: '100px', delay:500});
	sr.reveal('.adv_p2',{origin: 'right', distance: '100px', delay:600});
	sr.reveal('.adv_p3',{origin: 'right', distance: '100px', delay:700});
	sr.reveal('.adv_p4',{origin: 'right', distance: '100px', delay:800});
	sr.reveal('.adv_p5',{origin: 'right', distance: '100px', delay:900});
	sr.reveal('.adv_p6',{origin: 'right', distance: '100px', delay:1000});
	sr.reveal('.adv_p7',{origin: 'right', distance: '100px', delay:1100});

	sr.reveal('.partner-col',{origin: 'right', distance: '100px', delay:500});

	var clicked;
	$("#share").on('click', function() {
		if (!clicked) {
			setTimeout(function() {
               $("#twitter").css({"display":"block"}); 
            },10); 
			setTimeout(function() {
               $("#fb").css({"display":"block"});
            },100); 
            setTimeout(function() {
               $("#google").css({"display":"block"});
            },200); 
            
            clicked = true;
		}else {
			$("#fb").css({"display":"none"});
			$("#google").css({"display":"none"});
			$("#twitter").css({"display":"none"});
			clicked = false;
		}
	});
});