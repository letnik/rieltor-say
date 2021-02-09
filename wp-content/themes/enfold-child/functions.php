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
}




add_action( 'ava_after_content', 'action_function_name_2472' );
function action_function_name_2472(){

    $triggerFilter = '<div class="trigger-filter"></div>';
	echo $triggerFilter;

}

