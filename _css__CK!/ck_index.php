<?php
$Server = $_SERVER['SERVER_NAME'];
$Ruta = $_SERVER['PHP_SELF'] ;
$Carpeta = dirname($_SERVER['SCRIPT_NAME']);
/*
echo 'SERVER: '.$Server.'<br>';
echo 'Ruta: '.$Ruta.'<br>';
echo 'Carpeta: '.$Carpeta.'<br><br><br>';
*/
$nombreCarpeta = explode('/',$Carpeta);
//echo $nombreCarpeta[0].' ||||| '.$nombreCarpeta[1];


//SI HAY CARPETA
if (empty($nombreCarpeta[1]))
	$enlace = 'http://'.$Server."/";
else
	$enlace = 'http://'.$Server.'/'.$nombreCarpeta[1]."/";
	
header('Location: '.$enlace);
?>