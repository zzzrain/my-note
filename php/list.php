<?php
	// 创建数组存放商品
	$data = array();
	for($i=1;$i<=6;$i++){
		// 创建商品数据
		$goods = array(
			'guid'=>'g'.$i,
			'img'=>'img/g'.$i.'.jpg',
			'title'=>'公主'.$i.'号',
			'place'=>'中国东莞',
			'price'=>998
		);
		// 把数据插入数组
		$data[$i-1] = $goods; 
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>商品列表</title>
</head>
<body>
	<ul>
		<?php
			// 关联数组遍历
			foreach($data as $goods){
				//echo json_encode($goods,JSON_UNESCAPED_UNICODE);
				echo '<li>
					<a href="car.php?id='.$goods['guid'].'">
						<img src="'.$goods['img'].'">
					</a>
					<h3>'.$goods['title'].'</h3>
					<h4>'.$goods['place'].'</h4>
					<h4>'.$goods['price'].'</h4>
				</li>';
			}
		?>
	</ul>
</body>
</html>