jQuery(document).ready(function () {

	jQuery('.geodir-filter-cat:not(.gd-field-post_category)').on('click', function() {

		if ( jQuery(this).hasClass('is-open') ){

		  } else {
			
			jQuery('.geodir-filter-cat:not(.gd-field-post_category)').find('span').removeClass('is-open');
			jQuery(this).find('span').addClass('is-open');
			
			jQuery('.geodir-filter-cat:not(.gd-field-post_category)').removeClass('is-open');
			jQuery(this).addClass('is-open');
			jQuery('.geodir-filter-cat:not(.gd-field-post_category)').find('ul').fadeOut(200);
			// jQuery(this).find('ul').fadeIn(200);
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






jQuery(document).ready(function () {

	jQuery('.btn.phones').on('click', function() {

		jQuery(this).parent().find('ul.usesr_phones').toggleClass( "opened" );

		// jQuery(this).parent().find('ul.usesr_phones').fadeToggle(200);

	});
});

// провіряєм чекбокс у фільтрі
// jQuery(document).ready(function () {

// 	jQuery('.geodir-filter-cat li input[type=checkbox], .geodir-filter-cat li input[name="radio"]').each(function () {
// 		if (jQuery(this).prop('checked')) {
// 			jQuery(this).parent().addClass( "checked" );

// 		} else {
// 			jQuery(this).parent().removeClass( "checked" );

// 		}
// 	});

// 	jQuery(":checkbox").change(function () {
// 		jQuery(this).parent().toggleClass('checked');

// 	});
	
// });


jQuery(document).ready(function () {

	jQuery('.geodir-filter-cat li input').each(function () {
		if (jQuery(this).prop('checked')) {
			jQuery(this).parent().addClass( "checked" );

		} else {
			jQuery(this).parent().removeClass( "checked" );

		}
	});

	jQuery(".geodir-filter-cat li input").change(function () {
		jQuery(this).parent().toggleClass('checked');

	});
	
});




// $('input[name="radio"][value="1"]').prop('checked', true);
 
// // Отметить 2-й
// $('input[name="radio"][value="2"]').prop('checked', true);
 
// // Отметить 3-й
// $('input[name="radio"][value="3"]').prop('checked', true);
 
// // Снять
// $('input[name="radio"]').prop('checked', false);




// jQuery(document).ready(function () {

// 	private void radioButton_CheckedChanged(object sender, EventArgs e)
// 	{
// 			// приводим отправителя к элементу типа RadioButton
// 			RadioButton radioButton = (RadioButton)sender;
// 			if (radioButton.Checked)
// 			{
// 				jQuery(this).parent().addClass( "checked" );
// 			}        
// 	}

// });


// jQuery(document).ready(function(){


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
  
// });
  
jQuery(document).ready(function(){
	document.querySelector("#checkbox").addEventListener("change", () => {
		document.body.classList.toggle("dark");
	});
});


// jQuery(document).ready(function(){
// 	jQuery("<div class='step'>").insertBefore(jQuery("#geodir_fieldset_136"));
// 	jQuery("</div><class='step'>").insertBefore(jQuery("#geodir_fieldset_137"));
// 	jQuery("</div").insertBefore(jQuery("#geodir_fieldset_138"));
// });


// jQuery(document).ready(function(){
// 	jQuery(".required_field").each(function(){
// 		jQuery(this).nextUntil(".required_field").addBack().wrapAll("<div class='rs_wrapper'>");
// 	});
	
// });
// jQuery(document).ready(function(){
// 	jQuery("h5#geodir_fieldset_119").next().wrapAll("<div class='wrapper'></div>");
// });

// jQuery(document).ready(function(){
// 	jQuery("#geodir_fieldset_136").each(function(){
// 		jQuery(this).next("div").wrapAll("<div class='rs_wrapper'>");
// 	});
	
// });


// step_1

jQuery(document).ready(function(){
	jQuery('#gd_placecategory_row').wrapAll('<div class="rs_wrapper_1"></div>');
});
jQuery(document).ready(function(){
	jQuery('#property_type_row').wrapAll('<div class="rs_wrapper_1"></div>');
});
jQuery(document).ready(function(){
	jQuery('#post_title_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#type_of_bilding_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#plane_field_custom_row').wrapAll('<div class="rs_wrapper_1"></div>');
});
jQuery(document).ready(function(){
	jQuery('#property_bedrooms_row').wrapAll('<div class="rs_wrapper_1"></div>');
});
jQuery(document).ready(function(){
	jQuery('#floor_field_custom_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#number_floors_field_custom_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#property_area_3_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#property_area_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#kitchen_area_field_custom_row').wrapAll('<div class="rs_wrapper_1"></div>');	
});

jQuery(document).ready(function(){
	setTimeout(jQuery('.rs_wrapper_1').wrapAll('<div id="step_1" class="step_1"></div>'), 1000);
});


// step_2

jQuery(document).ready(function(){
	jQuery('#wall_material_field_custom_row').wrapAll('<div class="rs_wrapper_2"></div>');
});
jQuery(document).ready(function(){
	jQuery('#ceiling_height_row').wrapAll('<div class="rs_wrapper_2"></div>');
});
jQuery(document).ready(function(){
	jQuery('#balkony_row').wrapAll('<div class="rs_wrapper_2"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#property_features_row').wrapAll('<div class="rs_wrapper_2"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#property_furnishing_row').wrapAll('<div class="rs_wrapper_2"></div>');
});
jQuery(document).ready(function(){
	jQuery('#repair_row').wrapAll('<div class="rs_wrapper_2"></div>');
});
jQuery(document).ready(function(){
	jQuery('#property_bathrooms_row').wrapAll('<div class="rs_wrapper_2"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#amenities_row').wrapAll('<div class="rs_wrapper_2"></div>');	
});

jQuery(document).ready(function(){
	jQuery('#household_appliances_row').wrapAll('<div class="rs_wrapper_2"></div>');
});
jQuery(document).ready(function(){
	jQuery('#multimedia_row').wrapAll('<div class="rs_wrapper_2"></div>');
});
jQuery(document).ready(function(){
	jQuery('#communications_row').wrapAll('<div class="rs_wrapper_2"></div>');	
});

jQuery(document).ready(function(){
	setTimeout(jQuery('.rs_wrapper_2').wrapAll('<div id="step_2" class="step_2"></div>'), 1000);
});





jQuery(document).ready(function(){
	jQuery('#geodir_address_street_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_country_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_region_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_city_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_neighbourhood_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_map_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_latitude_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_longitude_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#geodir_address_mapview_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#post_content_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#price_2_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#price__commission_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#post_images_row').wrapAll('<div class="rs_wrapper_3"></div>');	
});

jQuery(document).ready(function(){
	setTimeout(jQuery('.rs_wrapper_3').wrapAll('<div id="step_3" class="step_3"></div>'), 1000);
});



jQuery(document).ready(function(){
	jQuery('#business_hours_row').wrapAll('<div class="rs_wrapper_4"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#expire_date_row').wrapAll('<div class="rs_wrapper_4"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#post_tags_row').wrapAll('<div class="rs_wrapper_4"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#to_whom_they_offer_row').wrapAll('<div class="rs_wrapper_4"></div>');	
});

jQuery(document).ready(function(){
	setTimeout(jQuery('.rs_wrapper_4').wrapAll('<div id="step_4" class="step_4"></div>'), 1000);
});


jQuery(document).ready(function(){
	var elemCount = jQuery('.sticker-tabs ul.geodir-gallery.geodir-images li').length;
	jQuery('.sticker-tabs ul.geodir-gallery.geodir-images li:nth-child(4) a').attr( 'attributeCountLi', elemCount );
}); 
