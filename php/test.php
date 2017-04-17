<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>php</title>
</head>
<body>
	<?php
		echo '<h3>hello world</h3>'.'<br>';
		
		// 声明常量
		define('name','jack');
		echo '我是',name,'<br>';

		// 声明变量
		$n = 10;
		$m = 'GLOBALS';
		function sum($x,$y){
			// 获取全局变量
			global $n;
			echo $GLOBALS['m'],'<br>';
			return $x+$y + $GLOBALS['n'];
		}
		echo '今年'.sum(10,10).'岁'.'<br>';
		echo '我数三声<br>';

		// 保存变量
		$i = 1;
		function add(){
			//global $i;
			static $i = 1;
			echo $i.'<br>';
			$i++;
		}
		add();
		add();
		echo '男人从来不用3，Boom<br><br>';

		// 字符串 strlen
		$str = '这条字符串长度为';
		echo '这条字符串长度为'.strlen($str).'<br><br>';


		// 数组  array()
		echo '数组遍历：<br>';

		$arr = array('北京','上海','广州','深圳');
		for($i=0;$i<count($arr);$i++){
			echo $arr[$i].' ';
		}

		echo '<br><br>foreach遍历：<br>';

		foreach($arr as $idx=>$item){
			echo $idx.'：'.$item,'<br>';
		}

		echo '<br>关联数组(对象遍历)：<br>';

		//$obj = ['国籍'=>'中国','省份'=>'广东','城市'=>'广州'];
		$obj = array('国籍'=>'中国','省份'=>'广东','城市'=>'广州');
		foreach($obj as $key=>$item){
			echo $key.'：'.$item,'<br>';
		}

		echo '<br>数组排序：';

		//$arr = [1,10,50,9,6];
		$arr = array(1,10,50,9,6);
		sort($arr);
		echo json_encode($arr);
	?>
</body>
</html>

