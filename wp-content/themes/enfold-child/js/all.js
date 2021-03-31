jQuery(document).ready(function () {

	jQuery('.geodir-filter-cat:not(.gd-field-post_category)').on('click', function() {

		if ( jQuery(this).hasClass('is-open') ){

		  } else {
			
			jQuery('.geodir-filter-cat:not(.gd-field-post_category)').find('span').removeClass('is-open');
			jQuery(this).find('span').addClass('is-open');
			
			jQuery('.geodir-filter-cat:not(.gd-field-post_category)').removeClass('is-open');
			jQuery(this).addClass('is-open');
			jQuery('.geodir-filter-cat:not(.gd-field-post_category)').find('ul').fadeOut(200);
			jQuery(this).find('ul').fadeIn(200);
			jQuery('.trigger-filter').fadeIn(200);
	
		};

	});

	jQuery('.trigger-filter').on('click', function() {

		jQuery('.geodir-filter-cat:not(.gd-field-post_category)').find('span').removeClass('is-open');	
		jQuery('.geodir-filter-cat:not(.gd-field-post_category)').removeClass('is-open');	
		jQuery('.geodir-filter-cat:not(.gd-field-post_category)').find('ul').fadeOut(200);
		jQuery('.trigger-filter').fadeOut(200);

	});
});

// провіряєм чекбокс у фільтрі
jQuery(document).ready(function () {

	jQuery('.geodir-filter-cat li input[type=checkbox]').each(function () {
		if (jQuery(this).prop('checked')) {
			jQuery(this).parent().addClass( "checked" );

		} else {
			jQuery(this).parent().removeClass( "checked" );

		}
	});

	jQuery(":checkbox").change(function () {
		jQuery(this).parent().toggleClass('checked');

	});
	
});




jQuery(document).ready(function(){


	// var senseSpeed = 50;
	// var previousScroll = 100;

	// jQuery(window).scroll(function(event){
	//    	var scroller = jQuery(this).scrollTop();
	//   	if (scroller > previousScroll){
	// 		jQuery('.sticker-map-container .list .tabcontainer').removeClass('sticky');
	//    	} else if (scroller+senseSpeed < previousScroll) {
	// 		jQuery('.sticker-map-container .list .tabcontainer').addClass('sticky');
	//    	}
	//    previousScroll = scroller;
	// });




	
	






	// jQuery(window).scroll(function() {
	//   winPos = jQuery(window).scrollTop();
	//   if (winPos >= 400) {
	// 	jQuery('.sticker-map-container .list .tabcontainer').addClass('sticky');
	//   }
	//   else {
	// 	jQuery('.sticker-map-container .list .tabcontainer').removeClass('sticky');
	//   }
	// });
  
});
  
jQuery(document).ready(function(){
	document.querySelector("#checkbox").addEventListener("change", () => {
		document.body.classList.toggle("dark");
	});
});