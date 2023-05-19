<?php
header('Content-type: text/css');
ob_start("compress");

function compress($buffer) {
	$credito = '/************************************************************************************************
Ckm!
web, Apps & Multimedia
www.ckm.co
2012
************************************************************************************************/
';

	/* remove comments */
	$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
	/* remove tabs, spaces, newlines, etc. */
	$buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
	return $credito.$buffer;
}

/* your css files */
//INTERFAZ
include('screen.css');
include('clickStyle.css');
include('nav.css');

ob_end_flush();

?>
