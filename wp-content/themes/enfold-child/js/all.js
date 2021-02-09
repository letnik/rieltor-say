jQuery(document).ready(function () {

	jQuery('.geodir-filter-cat').on('click', function() {

		if ( jQuery(this).hasClass('is-open') ){

		  } else {
			
			jQuery('.geodir-filter-cat').find('span').removeClass('is-open');
			jQuery(this).find('span').addClass('is-open');
			
			jQuery('.geodir-filter-cat').removeClass('is-open');
			jQuery(this).addClass('is-open');
			jQuery('.geodir-filter-cat').find('ul').fadeOut(200);
			jQuery(this).find('ul').fadeIn(200);
			jQuery('.trigger-filter').fadeIn(200);
	
		};

	});

	jQuery('.trigger-filter').on('click', function() {

		jQuery('.geodir-filter-cat').find('span').removeClass('is-open');	
		jQuery('.geodir-filter-cat').removeClass('is-open');	
		jQuery('.geodir-filter-cat').find('ul').fadeOut(200);
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

