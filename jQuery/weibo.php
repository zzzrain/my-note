<?php
	// 声明数据地址
	$url = 'data/weibo.json';

	// 接收前端数据
	$id = isset($_GET['id'])?$_GET['id']:'';

	// 只读方式打开文件
	$file = fopen($url,'r');

	// 读取文件数据
	$data = fread($file,filesize($url));

	if($id != ''){
		// 转为数组操作数据
		$arr = json_decode($data);
		$res;
		// 通过id判断修改内容
		foreach($arr as $item){
			if($item->id == $id){
				$item->likecnt++;
				$res = $item;
			}		
		}

		// 修改完后转回字符串
		echo json_encode($res,JSON_UNESCAPED_UNICODE);

		// 重写文件内容
		$file = fopen($url,'w');
		fwrite($file,json_encode($arr,JSON_UNESCAPED_UNICODE));
		
	}else{
		echo $data;
	}
	
	// 关闭文件
	fclose($file);	
?>