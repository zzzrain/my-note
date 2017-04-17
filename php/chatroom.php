<?php
	$user = isset($_GET['user']) ? $_GET['user'] : '';
	$gender = isset($_GET['gender']) ? $_GET['gender'] : '';
	$text = isset($_GET['text']) ? $_GET['text'] : '';

	// 获取客户端局域网ip
	$host = exec("host");
	$ip = gethostbyname($host);

	// 获取前端数据
	$data = array(
		'name'=>$user,
		'gender'=>$gender,
		'content'=>$text,
		'ipfrom'=>$ip,
		'createtime'=>time()
	);
	
	$url = 'data/chat.json';
	
	// $sub = file_get_contents('data/chat.json');
	// $temp = json_encode($data,JSON_UNESCAPED_UNICODE);
	// $arr = str_replace(']',','.$temp.']',$sub);
	// echo file_put_contents($url,$arr);

	
	$file = fopen($url,'r');

	$temp = fread($file, filesize($url));

	$arr = json_decode($temp,true);

	array_push($arr, $data);
	
	$file = fopen($url, 'w');

	fwrite($file, json_encode($arr,JSON_UNESCAPED_UNICODE));
	fclose($file);

	echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>