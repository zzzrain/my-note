<?php
	header('Access-Control-Allow-Origin:http://wthrcdn.etouch.cn/weather_mini?city=北京');
	$res = array(
		'type'=>'CORS',
		'description'=>''
	);
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>