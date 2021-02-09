jQuery(document).ready(function () {

	// $('.ads-category-item').on('click', function() {
  
	//   var subcategoryId = $(this).data('subcategoryId');
	// 	id = document.getElementById(subcategoryId);
  
	//   if ( $(id).hasClass('active') ){
	// 	  $('.ads-subcategory').removeClass('active');
  
	// 	} else {
	// 	  $('.ads-subcategory').removeClass('active');
	// 	  $(id).toggleClass('active');
	//   };
	//   if ( $(this).hasClass('active') ){
	// 	  $('.ads-category-item').removeClass('active');
  
	// 	} else {
	// 	  $('.ads-category-item').removeClass('active');
	// 	  $(this).toggleClass('active');
  
	//   };
	//   if ($(window).width() <= 576) {
	// 	$('.ads-category-item').addClass('d-none');
	// 	$('.ads-category-item').removeClass('active');
	//   }
  
  
	// });

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


// // провіряєм checkbox
// const checkbox = document.querySelector('.geodir-filter-cat li input');

// checkbox.addEventListener('change', function () {
//     if ( this.checked ) {
//         jQuery(this).fadeOut();
//     } else console.log('unchecked');
// })
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

