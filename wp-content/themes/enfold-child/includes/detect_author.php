<?php

add_shortcode( 'detect_author', 'show_detect_author' );

function show_detect_author(){

    
    $posts = get_posts( array(
        'numberposts' => 5,
        'category'    => 0,
        'orderby'     => 'date',
        'order'       => 'DESC',
        'include'     => array(),
        'exclude'     => array(),
        'meta_key'    => '',
        'meta_value'  =>'',
        'post_type'   => 'gd_place',
        'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
    ) );
    
    foreach( $posts as $post ){
        setup_postdata($post);
        echo get_the_title();
    }
    
    wp_reset_postdata(); // сброс

}