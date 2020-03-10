(function ($) {
    "use strict";

    // mobile menu
    $('.burger, .overlay').click(function(){
        $('.child-menu-ul-one').hide();
        $('.child-menu-ul-two').hide();
        $('.child-menu-ul-three').hide();
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('.menu').toggleClass('show');
        $('body').toggleClass('overflow');
      });

    $('.child-menu-one').click(function() {
        $('.child-menu-ul-two').hide();
        $('.child-menu-ul-three').hide();
      $('.child-menu-ul-one').toggle('visible');
    });

    $('.child-menu-two').click(function() {
        $('.child-menu-ul-one').hide();
        $('.child-menu-ul-three').hide();
        $('.child-menu-ul-two').toggle('visible');
    });

    $('.child-menu-three').click(function() {
        $('.child-menu-ul-one').hide();
        $('.child-menu-ul-two').hide();
        $('.child-menu-ul-three').toggle('visible');
    });

    // end mobile menu


    /*----------------------------
	owl active
------------------------------ */  
	$(".client-says").owlCarousel({
    items : 1,
    autoPlay: true, 
    slideSpeed:2000,
    dots:true,
      
  });

  $(".our-clients").owlCarousel({
    items : 6,
    autoPlay: true, 
    slideSpeed:2000,
    dots:false,
    nav: true, 
    navText:['<span class="lnr lnr-chevron-left"></span>', "<span class='lnr lnr-chevron-right'></span>"],
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:4,
      },
      1000:{
          items:6,
      }
    }
  });

  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Show More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Show Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Show More");
      $("#text").slideUp();
    }
  });


})(jQuery); 