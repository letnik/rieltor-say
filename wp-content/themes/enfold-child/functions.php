<?php
//style

//Set builder mode to debug
function builder_set_debug()
{
    return 'debug';
}

add_action('avia_builder_mode', 'builder_set_debug');

add_filter('show_admin_bar', '__return_false');

function sl_add_scripts()
{
    //Custom JS
    // wp_enqueue_script('sticky', get_stylesheet_directory_uri() . '/js/hc-sticky.js', array('jquery'), null, true );
    wp_enqueue_script('ui-autocomplet', get_stylesheet_directory_uri() . '/js/jquery-ui-autocomplete.min.js', array('jquery'), null, true );
    wp_enqueue_script('autocomplete-data', get_stylesheet_directory_uri() . '/js/autocomplete-data.js', array('jquery'), null, true );
    wp_enqueue_script('all', get_stylesheet_directory_uri() . '/js/all.js', array('jquery'), null, true );


    wp_enqueue_style('all', get_stylesheet_directory_uri() . '/css/all.css', [], null);

    //Run custom JS
    wp_enqueue_script('all');

    wp_enqueue_style('all');
}
add_action('wp_enqueue_scripts', 'sl_add_scripts', 20);


function sl_tel($tel) {
    return preg_replace('/[^0-9+]/', '', $tel);
}

// // add_shortcode logo
// add_shortcode('avs_avia_logo', 'callback_avia_logo');
// function callback_avia_logo() {
//     $logo = avia_get_option('logo');
//     $logo = !empty( $logo ) ? $logo : AVIA_BASE_URL.'images/layout/logo.svg';
//     return  avia_logo($logo, '', 'strong', true);
// }


add_action( 'after_setup_theme', 'theme_register_nav_menu' );
function theme_register_nav_menu() {
	register_nav_menu( 'primary', 'Primary Menu' );
}



// add_shortcode('avs_avia_logo', 'callback_avia_logo');
// function callback_avia_logo() {
// 	$logo = avia_get_option('logo');
// 	return  avia_logo($logo, '', 'strong', true);
// }

// add_action( 'ava_after_main_menu', 'nav_logo_custom' );
// function nav_logo_custom() {

//     $logo = avia_get_option('logo');
//     echo $logo;

// }

add_action( 'ava_after_main_menu', 'nav_menu_custom' );
function nav_menu_custom() {

	wp_nav_menu( array(
        'menu_class'=>'menu-abra',
        'theme_location'=>'primary',
        'after'=>''
    ) );
    echo '<div class="centro">dark_mode</div>
    <div class="dark_mode"><input type="checkbox" id="dark_mode" /></div>';
}




// add_action( 'geodir_after_search_form', 'action_function_name_2472' );
// function action_function_name_2472(){

//     $triggerFilter = '<div class="trigger-filter"></div>';
// 	echo $triggerFilter;

// }

// add_action( 'wp_footer', 'trigger_tilter_2', 1 );

// function trigger_tilter_2() {
//     $triggerTilter_2 = '<div class="trigger-filter"></div>';
// 	echo $triggerTilter_2;
    
// }


// // тест

add_action( 'ava_after_main_container', 'users_primary_menu' );

function users_primary_menu() {
    
    echo '<div id="top-menu-custom" class="top-menu-custom">';

    wp_nav_menu( array(
        'menu_class'=>'menu-abra',
        'theme_location'=>'primary',
        'after'=>''
    ) );

    echo '</div>
    ';

}

// add_shortcode( 'show_breadcrumbs', 'shortcode_breadcrumbs' );

// function shortcode_breadcrumbs() {

//     echo '<div id="yoast_breadcrumb-custom" class="yoast_breadcrumb-custom">';

//     if ( function_exists('yoast_breadcrumb') ) {
//         yoast_breadcrumb( '<div id="breadcrumbs">','</div>' );
//         }

//     echo '</div>';
// }

add_shortcode( 'my_numposts', 'my_numposts_func' );

function my_numposts_func( $atts ){

    global $wp_query;
    $numposts = $wp_query->found_posts;

	return $numposts;
}



add_shortcode( 'my_plases_lable_rs', 'my_plases_lable_rs_func' );

function my_plases_lable_rs_func(){

    // необязательно, но в некоторых случаях без этого не обойтись
    
    $posts = get_posts(array(
        'numberposts'	=> -1,
        'post_type'	=> 'gd_place',
        'meta_key'	=> 'author',
    ));



    echo $posts;

}



// Дозволяєм завантаження усіх файлів
// define( 'ALLOW_UNFILTERED_UPLOADS', true );

// Дозволяєм завантаження SVG
function my_myme_types($mime_types){
    $mime_types['svg'] = 'image/svg+xml'; // поддержка SVG
    return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);



add_filter( 'wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5 );

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type( $data, $file, $filename, $mimes, $real_mime = '' ){

	// WP 5.1 +
	if( version_compare( $GLOBALS['wp_version'], '5.1.0', '>=' ) )
		$dosvg = in_array( $real_mime, [ 'image/svg', 'image/svg+xml' ] );
	else
		$dosvg = ( '.svg' === strtolower( substr($filename, -4) ) );

	// mime тип был обнулен, поправим его
	// а также проверим право пользователя
	if( $dosvg ){

		// разрешим
		if( current_user_can('manage_options') ){

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// запретим
		else {
			$data['ext'] = $type_and_ext['type'] = false;
		}

	}

	return $data;
}



add_filter( 'wp_prepare_attachment_for_js', 'show_svg_in_media_library' );

# Формирует данные для отображения SVG как изображения в медиа библиотеке.
function show_svg_in_media_library( $response ) {
	if ( $response['mime'] === 'image/svg+xml' ) {
		// С выводом названия файла
		$response['image'] = [
			'src' => $response['url'],
		];
	}

	return $response;
}

