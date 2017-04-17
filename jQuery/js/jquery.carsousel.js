;(function($){
	$.fn.carousel = function(opt){
		var defaults = {
			showSmall:false,
			duration:3000
		};
		var opt = $.extend(true, defaults, opt);		
		return this.each(function() {
			// 改名
			var list = $(this).addClass('wrap');

			// 创建大图
			var large = $('<div/>').addClass('large').appendTo('.wrap');
			var imgs = opt.img.map(url=>{return `<img src="${url}">`;})
			console.log(imgs)
			large.html(imgs);

			var wide = list.outerWidth();
			var lens = large.children().length;

			// 克隆小图			
			if(opt.showSmall){
				var little = large.clone(true).addClass('little').removeClass('large');
				little.appendTo('.wrap').children().width(wide/lens);
			}

			// 添加分页
			$('<div/>').addClass('page').appendTo('.wrap').
			html(opt.img.map(()=>{return `<span/>`;}));
			var page = $('.page span');
			page.eq(0).addClass('active');
			$('.page').css({	
				top:large.outerHeight()-large.outerHeight()*0.1,
				left:large.outerWidth()/2-$('.page').outerWidth()/2
			});

			// 设置当前、上一个索引值
			var idx = 0;
			var idx_= 0;
			var timer;

			list.mouseenter(()=>{
				clearInterval(timer);
			}).mouseleave(()=>{
				timer = setInterval(()=>{
					idx++;
					show();
				},opt.duration);
			}).on('click','.page span',function(){
				idx = $(this).index();
				show();
			}).on('click','.little img',function(){
				idx = $(this).index();
				show();
			}).trigger('mouseleave'); // 自动触发事件

			function show(){
				// 首尾判断
				if(idx === lens) {idx=0}
				if(idx < 0) {idx = lens-1}

				if(opt.showSmall){
					little.children().eq(idx).animate({opacity:1},1000).siblings().animate({opacity:0.5},1000);
				}

				large.children().eq(idx).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
				page.eq(idx).addClass('active').siblings().removeClass('active');

				// 重置idx值
				idx_ = idx;
			}
		});
	}
})(jQuery);
