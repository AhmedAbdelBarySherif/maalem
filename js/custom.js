$(document).ready( function() {
  //for home slider
    $(function() {
			
				var Page = (function() {

					var $nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init({
                    interval: 500000000000
                });           
                 
            });
//up
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 800){
          $('.up').fadeIn(500)
      } else {
          $('.up').fadeOut(500)
      }
  });
   
  $('.up').click(function() {
      $('html, body').animate({scrollTop: 0}, 800);
  });

    //owl carousel (clients logo)
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        dots: false,
        nav: false,
        margin: 0,
        responsive:{
            0:{items:1},
            600:{items:2},
            1000:{items:5}
            },
        center:true,
        slideBy:2,
        autoplayTimeout:5000,
    });

    $('.owl-prev, .owl-next').html('');
//    
    //trigger wow
   new WOW().init();
    
    $('#media').carousel({
        pause: true,
        interval: false,
      });
    
    
    $(window).scroll(function() {
        if( $(this).scrollTop() >= 440 ) {
            $('.form_scrolled').css({
                position: 'fixed',
                width: '400px',
                top: '0',
                'z-index': 5 
            });
        } else {
            $('.form_scrolled').css('position', 'relative');
        }
    });
});