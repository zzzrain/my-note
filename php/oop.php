<?php
	// 构造函数
	// js写法：function Obj(){}
	class Obj{
		// 描述属性
		// var $name = '三国野史';
		// var $age = 227;

		// 创建原型
		function __construct($name='三国野史',$age=227){
			$this->name = $name;
			$this->age = $age;
		}

		// 默认公有方法可以不写 
		public function fight(){
			echo '我是'.$this->name.'，我会马中貂蝉<br><br>';
			// 访问私有方法
			$this->play(); 
		}

		// 私有方法
		private function play(){
			echo '我还会女票女昌<br><br>';
		}

		// 静态方法
		static function sleep(){
			echo '我是貂蝉,我很能睡<br><br>';
		}

		// 析构函数
		function __destruct(){
			echo 'Bye';
		}
	}	

	// 创建实例
	$p1 = new Obj;
	$p2 = new Obj('人中吕布',28);
	$p3 = new Obj('马中貂蝉',20);
	echo $p1->name.' ',$p1->age,'<br><br>';
	echo $p2->name.' ',$p2->age,'<br><br>';
	echo $p3->name.' ',$p3->age,'<br><br>';

	// 外面不能访问私有方法	
	// $p1->play();
	$p2->fight();

	// 访问静态方法
	Obj::sleep();


	// 继承
	class General extends Obj{

	}
	$p4 = new General('曹丕之父');
	$p4->fight();
?>