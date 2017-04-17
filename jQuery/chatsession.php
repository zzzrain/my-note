<?php
	// 开启会话
	session_start();

	$state = isset($_GET['state']) ? $_GET['state'] : '';
	$user = isset($_GET['user']) ? $_GET['user'] : '';
	$gender = isset($_GET['gender']) ? $_GET['gender'] : '';

	// 判断三种状态对应返回的数据
	if($state === 'login'){
		$_SESSION['user'] = $user;
		$_SESSION['gender'] = $gender;
		echo 'login';
	}else if($state === 'logout'){
		// 清空所有会话
		session_destroy();
		echo 'logout';
	}else{

		// 判断数据是否存在
		$user = isset($_SESSION['user']) ? $_SESSION['user'] : '';
		$gender = isset($_SESSION['gender']) ? $_SESSION['gender'] : '';
		
		if($user && $gender){
			$data = array(
				'user' => $_SESSION['user'],
				'gender' => $_SESSION['gender']
			);
			echo json_encode($data,JSON_UNESCAPED_UNICODE);
		}else{
			echo '';
		}
	}
?>