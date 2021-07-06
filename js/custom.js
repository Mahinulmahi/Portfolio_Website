new WOW().init();


// MixitUp JS
var container = document.querySelector('.gallery')
            
var mixer = mixitup(container, {
	selectors: {
		control: '[our-mix-control]'
	}
});

// Owl Carousel JS
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 2000,
  	smartSpeed: 250,
  	loop: true,
  	responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});

                // Our Custom Code


    $(document).ready(function(){

        $(".top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });
        $(".top").hide();

        $(window).scroll(function(){
            var ourWindow = $(this).scrollTop();

            if(ourWindow<1000) {
                $(".top").fadeOut();
            } else {
                $(".top").fadeIn();
            }

            // menu fixed
            if(ourWindow>50) {
            $("body").addClass("fixed");
        } else {
            $("body").removeClass("fixed");
        }


        });

        // Navbar 
        $(".navbar-nav li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });



        $('.navbar-nav a[href^="#"]').click(function(e){
            e.preventDefault();

            var target = this.hash;

            $('html, body').animate({
                scrollTop: $(target).offset().top - 75
            }, 500);
        });


    });

// Wow JS

