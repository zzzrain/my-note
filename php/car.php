<?php
	// 获取商品guid
	$guid = $_GET['id'];

	// 声明指定商品
	$good;

	// 把商品数据添加到一个数组
	$data = array();
	for($i=1;$i<=6;$i++){
		$goods = array(
			'guid'=>'g'.$i,
			'img'=>'img/g'.$i.'.jpg',
			'title'=>'公主'.$i.'号',
			'place'=>'中国东莞',
			'price'=>998
		);

		// 判断是否当前商品
		if($goods['guid'] === $guid){
			$good = $goods;
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>详细信息</title>
</head>
<body>
	<div class="good">
		<img src="<?= $good['img'] ?>">
		<h3>名称：<?= $good['title'] ?></h3>
		<h3>产地：<?= $good['place'] ?></h3>
		<h3>价格：<?= $good['price'] ?></h3>
	</div>
</body>
</html>