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

jQuery(document).ready(function(){
	jQuery('#gd_placecategory_row').wrapAll('<div class="rs_wrapper"></div>');
});
jQuery(document).ready(function(){
	jQuery('#property_type_row').wrapAll('<div class="rs_wrapper"></div>');
});
jQuery(document).ready(function(){
	jQuery('#post_title_row').wrapAll('<div class="rs_wrapper"></div>');	
});
jQuery(document).ready(function(){
	jQuery('#type_of_bilding_row').wrapAll('<div class="rs_wrapper"></div>');	
});

jQuery(document).ready(function(){
	setTimeout(jQuery('.rs_wrapper').wrapAll('<div id="step_1" class="step_1"></div>'), 1000);
	
});





jQuery(document).ready(function(){
	var elemCount = jQuery('.sticker-tabs ul.geodir-gallery.geodir-images li').length;
	jQuery('.sticker-tabs ul.geodir-gallery.geodir-images li:nth-child(4) a').attr( 'attributeCountLi', elemCount );
}); 
