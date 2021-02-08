// jQuery(document).ready(function() {
//     let inner_product =  jQuery('.inner_product');
//         inner_product_a = jQuery('.inner_product .product-attributes-wrap').height();
//         inner_product_h = inner_product_a + 20;
//         inner_product.find('.product-box-shasow').css( "height", "calc(100% + " + inner_product_h +  "px)");  
//         return;
// });


function getTopOffset(e) { 
	var y = 0;
	do { y += e.offsetTop; } while (e = e.offsetParent);
	return y;
}
var block = document.getElementById('fixblock'); /* fixblock - значение атрибута id блока */
if ( null != block ) {
	var topPos = getTopOffset( block );

	window.onscroll = function() {
		var scrollHeight = Math.max( document.documentElement.scrollHeight, document.documentElement.clientHeight),

		    // определяем высоту рекламного блока
		    blockHeight = block.offsetHeight,

		    // вычисляем высоту подвала, footer заменить на значение атрибута id подвала
		    footerHeight = document.getElementById('footer').offsetHeight, 	    

		    // считаем позицию, до которой блок будет зафиксирован 
		    stopPos = scrollHeight - blockHeight - footerHeight; 

		var newcss = (topPos < window.pageYOffset) ? 
			'top:20px; position: fixed; width: 44%;' : 'position:static;';

		if ( window.pageYOffset > stopPos ) 
			newcss = 'position: absolute; bottom: 0;';

		block.setAttribute( 'style', newcss );

	}
}



// jQuery(document).ready(function($) {
// 	function ReplaceSelectWithButtons(selectField) {
// 	  // get the basics
// 	  var selectValue = selectField.val();
// 	  var selectId = selectField.attr('class')
	  
// 	  // get all options and create buttons
// 	  $(selectField).find('option').each(function() {
// 		if ($(this).val()) {
// 		  var btn = $('<div data-value="' + $(this).val() + '" data-target="' + selectId  + '" class="selectbtn">' + $(this).text() + '</div>');
// 		  if ($(this).val() == selectValue) {
// 			btn.addClass('selected');
// 		  }
// 		  btn.insertBefore(selectField);
// 		}
// 	  });    
// 	  // hide the select field
// 	  selectField.hide();
  
// 	  // map click event to buttons
// 	  $(document).on('click', '.selectbtn', function() {
// 		var target = $(this).data('target');
// 		$('.selectbtn[data-target="' + target + '"]').removeClass('selected');
// 		$(this).addClass('selected');
		
// 		// deselect everything, select the selected :)
// 		var selectorAll = '.' + target + ' option';
// 		$(selectorAll).removeAttr('selected');
// 		var selectorSingle = '.' + target + ' option[value="' + $(this).data('value') + '"]';
// 		$(selectorSingle).attr('selected', 'selected');
// 		$(selectorSingle).change();
// 	  });
// 	}
	
// 	// change selects
// 	ReplaceSelectWithButtons($('.geodir-listing-search .geodir-search div:first-child select'));
//   });
  
//   var mutationObserver = new MutationObserver(function(mutations) {
// 	mutations.forEach(function(mutation) {
// 	  console.log(mutation);
// 	});
//   });


var button = document.querySelector('body');
button.addEventListener('click', function ReplaceSelectWithButtons(selectField) {
	  // get the basics
	  var selectValue = selectField.val();
	  var selectId = selectField.attr('class')
	  
	  // get all options and create buttons
	  $(selectField).find('option').each(function() {
		if ($(this).val()) {
		  var btn = $('<div data-value="' + $(this).val() + '" data-target="' + selectId  + '" class="selectbtn">' + $(this).text() + '</div>');
		  if ($(this).val() == selectValue) {
			btn.addClass('selected');
		  }
		  btn.insertBefore(selectField);
		}
	  });    
	  // hide the select field
	  selectField.hide();
  
	  // map click event to buttons
	  $(document).on('click', '.selectbtn', function() {
		var target = $(this).data('target');
		$('.selectbtn[data-target="' + target + '"]').removeClass('selected');
		$(this).addClass('selected');
		
		// deselect everything, select the selected :)
		var selectorAll = '.' + target + ' option';
		$(selectorAll).removeAttr('selected');
		var selectorSingle = '.' + target + ' option[value="' + $(this).data('value') + '"]';
		$(selectorSingle).attr('selected', 'selected');
		$(selectorSingle).change();
	  });
	}
	
	// change selects
	ReplaceSelectWithButtons($('.geodir-listing-search .geodir-search div:first-child select'));
  });