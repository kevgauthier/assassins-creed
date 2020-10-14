
	$( document ).ready(function() {
	    console.log( "ready!" );
	   
		 $('.slider').slick({
		 	slidesToShow: 1,
		 	slidesToScroll: 1,
		 	arrows: false,
		 	fade: true,
		 	asNavFor: '.slider-nav-thumbnails',
		 	loop: true,
  			autoplay: true,
		 });

		 $('.slider-nav-thumbnails').slick({
		 	slidesToShow: 3,
		 	slidesToScroll: 3,
		 	asNavFor: '.slider',
		 	dots: false,
		 	focusOnSelect: true,
		 	draggable:false,
		 });

		 // Remove active class from all thumbnail slides
		// $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

		 // Set active class to first thumbnail slides
		 //$('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

		 // On before slide change match active thumbnail to current slide
		 /*$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		 	var mySlideNumber = nextSlide;
		 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
		 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
		});*/


		$(".toggle_menu").click(function(){

			if($(".wrapNav").hasClass("toggled")){
				$(".wrapNav").removeClass("toggled");
			}else{
				$(".wrapNav").addClass("toggled");
			}
		});



	});
