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
  
// jQuery(document).ready(function(){
// 	document.querySelector("#checkbox").addEventListener("change", () => {
// 		document.body.classList.toggle("dark");
// 	});
// });


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
	jQuery('#geodir_fieldset_136,#gd_placecategory_row,#property_type_row,#post_title_row,#type_of_bilding_row,#plane_field_custom_row,#property_bedrooms_row,#floor_field_custom_row,#number_floors_field_custom_row,#property_area_3_row,#property_area_row,#kitchen_area_field_custom_row').wrapAll('<div class="rs_wrapper_1"></div>');	

	setTimeout(jQuery('.rs_wrapper_1').wrapAll('<div id="step_1" class="step_1"></div>'), 1);

	jQuery(".rs_wrapper_1").append("<div class='step_wrap'><div id='go_step_2'>Крок 2</div></div>");

});

jQuery(document).ready(function(){

		jQuery( "#go_step_2" ).click(function() {
			jQuery('#step_1').fadeOut();
			jQuery('#step_2').fadeIn();
		});

});



// jQuery(document).ready(
	
// 	function createButton() {

// 		let parent = document.querySelector('.rs_wrapper_1');
// 		let button = document.createElement('button');
// 		button.setAttribute('href', '#');
// 		button.innerHTML = 'next-step';
// 		button.className = "next-step";

// 		parent.appendChild(button);
// 	}

// );

// step_2

jQuery(document).ready(function(){

	jQuery('#geodir_fieldset_119,#wall_material_field_custom_row,#ceiling_height_row,#balkony_row,#property_features_row,#property_furnishing_row,#repair_row,#property_bathrooms_row,#amenities_row,#household_appliances_row,#multimedia_row,#communications_row').wrapAll('<div class="rs_wrapper_2"></div>');	

	setTimeout(jQuery('.rs_wrapper_2').wrapAll('<div id="step_2" class="step_2"></div>'), 1);

	jQuery(".rs_wrapper_2").append("<div id='go_step_3'>Крок 3</div>");

	jQuery(".rs_wrapper_2").append("<div id='back_step_1'>Назад</div>");

});

jQuery(document).ready(function(){

	jQuery( "#go_step_3" ).click(function() {
		jQuery('#step_2').fadeOut();
		jQuery('#step_3').fadeIn();
	});

});


jQuery(document).ready(function(){

	jQuery( "#back_step_1" ).click(function() {
		jQuery('#step_2').fadeOut();
		jQuery('#step_1').fadeIn();
	});

});

jQuery(document).ready(function(){
	jQuery('#geodir_fieldset_137,#post_images_row,#price__commission_row,#price_2_row,#post_content_row,#geodir_address_mapview_row,#geodir_address_longitude_row,#geodir_address_latitude_row,#geodir_address_map_row,#geodir_address_neighbourhood_row,#geodir_address_city_row,#geodir_address_region_row,#geodir_address_country_row,#geodir_address_street_row').wrapAll('<div class="rs_wrapper_3"></div>');	

	setTimeout(jQuery('.rs_wrapper_3').wrapAll('<div id="step_3" class="step_3"></div>'), 1);

	jQuery(".rs_wrapper_3").append("<div id='go_step_4'>Крок 4</div>");

	jQuery(".rs_wrapper_3").append("<div id='back_step_2'>Назад</div>");
});

jQuery(document).ready(function(){

	jQuery( "#go_step_4" ).click(function() {
		jQuery('#step_3').fadeOut();
		jQuery('#step_4').fadeIn();
	});

});

jQuery(document).ready(function(){

	jQuery( "#back_step_2" ).click(function() {
		jQuery('#step_3').fadeOut();
		jQuery('#step_2').fadeIn();
	});

});


jQuery(document).ready(function(){
	jQuery('#geodir_fieldset_141,#to_whom_they_offer_row,#post_tags_row,#expire_date_row,#business_hours_row,#geodir-add-listing-submit').wrapAll('<div class="rs_wrapper_4"></div>');	

	setTimeout(jQuery('.rs_wrapper_4').wrapAll('<div id="step_4" class="step_4"></div>'), 1);

	jQuery(".rs_wrapper_4").append("<div id='back_step_3'>Назад</div>");
	
	// jQuery(".rs_wrapper_4").append("<div>Готово</div>");
});




jQuery(document).ready(function(){

	jQuery( "#back_step_3" ).click(function() {
		jQuery('#step_4').fadeOut();
		jQuery('#step_3').fadeIn();
	});

});










jQuery(document).ready(function(){
	var elemCount = jQuery('.sticker-tabs ul.geodir-gallery.geodir-images li').length;
	jQuery('.sticker-tabs ul.geodir-gallery.geodir-images li:nth-child(4) a').attr( 'attributeCountLi', elemCount );
}); 
