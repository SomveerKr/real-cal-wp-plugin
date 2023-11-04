<?php
/*
Plugin Name: Real Estate Cashflow Calculator
Plugin URI: 
Description: Compound interest calculator that help users understand the cashflow, negative and positive prospects of a property.
Version: 1.0.0
Author: Somveer Kumar
Author URI: https://github.com/SomveerKr
License: GPLv2 or later
Text Domain: realestate_cashflow_calculator
*/

if (!function_exists('add_shortcode')) return "No direct call for Real Estate Cashflow Calculator";

function display_realestate_cashflow_calculator(){
    $page = 'index.html';
    return '<div><iframe style="background:transparent;" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="realestate_cashflow_calculator_iframe"></iframe></div>';
}

add_shortcode( 'realestate_cashflow_calculator', 'display_realestate_cashflow_calculator' );