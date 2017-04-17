<?php
	// 接收前端获取的数据
	$user = $_GET['user'];
	// 已被注册
	$arr = array('貂蝉','大桥','小乔','香香');
	// 
	if(in_array($user,$arr)){
		echo true;
	}
?>