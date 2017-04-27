;(function($){
    /*大图大小、位置、间隔*/
    // 改善需求
    // 放大镜根据小图按比例生成（默认1/4，可改）
    // 放大区域根据小图按比例生成（默认1/1，可改）

    // jQuery.prototype.zoom = function(){}
    $.fn.zoom = function(opt){
        var defaults = {
            width:480,
            height:300,
            position:'right',
            gap:20,
            zoomColor:'rgba(255,255,0,0.3)'
        }
        // ES6方法
        // opt = Object.assign({},defaults,opt);

        // jQuery方法
        var opt = $.extend(true,defaults,opt);

        // 遍历以便多次使用
        this.each(function() {
            // 获取全局变量
            var $wrap = $(this).addClass('zoom-wrap'); 
            var $imgX = $(this).children('img');
            var $ratio;

            init();
            function init(){
                // 创建放大镜、大图
                var $zoom = $('<span/>').addClass('zoom').appendTo($wrap).hide();
                var $imgL = $('<img/>').attr('src',$imgX.data('large'));
                var $large = $('<div/>').addClass('zoom-large').append($imgL).appendTo('body').hide();
                
                // 设置样式          
                /*$large.css({
                    left: $imgX.offset().left + $imgX.outerWidth(),
                    top: $imgX.offset().top
                });*/

                if(opt.position){
                    var left = $imgX.offset().left + $imgX.outerWidth() + opt.gap;
                    var top = $imgX.offset().top;
                    if(opt.position === 'left'){
                        var left = $imgX.offset().left - opt.width - opt.gap;
                    }
                    if(opt.position === 'bottom'){
                        var left = $imgX.offset().left;
                        var top = $imgX.offset().top + $imgX.outerHeight() + opt.gap;
                    }
                    $large.css({left:left,top:top});
                }

                $large.css({width:opt.width,height:opt.height});
                
                $wrap.mouseenter(e=>{
                    $zoom.show();
                    $large.show();

                    // 计算比例
                    $ratio = $imgX.outerWidth()/$imgL.outerWidth();    
                    $zoom.css({                        
                        width: $large.outerWidth()*$ratio,
                        height: $large.outerHeight()*$ratio,
                        background:opt.zoomColor
                    });
                });

                $wrap.mousemove(e=>{
                    // 放大镜定位
                    var $left = e.pageX-$wrap.offset().left-$zoom.outerWidth()/2;
                    var $top = e.pageY-$wrap.offset().top-$zoom.outerHeight()/2;

                    // 判断边界
                    var $wide = $imgX.outerWidth()-$zoom.outerWidth();
                    var $high = $imgX.outerHeight()-$zoom.outerHeight();

                    if($left<0) $left = 0;
                    if($left>$wide) $left = $wide;
                    if($top<0) $top = 0;
                    if($top>$high) $top = $high;

                    // 放大区域
                    $zoom.css({left: $left, top: $top});
                    $imgL.css({left: -$left/$ratio,top: -$top/$ratio});
                });

                $wrap.mouseleave(e=>{
                    $zoom.hide();
                    $large.hide();
                });

                function enter(){
                    $zoom.show();
                    $large.show();

                    // 计算比例
                    $ratio = $imgX.outerWidth()/$imgL.outerWidth();    
                    $zoom.css({
                        width: $large.outerWidth()*$ratio,
                        height: $large.outerHeight()*$ratio
                    });
                }
                function move(){
                    // 放大镜定位
                    var $left = e.pageX-$wrap.offset().left-$zoom.outerWidth()/2;
                    var $top = e.pageY-$wrap.offset().top-$zoom.outerHeight()/2;

                    // 判断边界
                    var $wide = $imgX.outerWidth()-$zoom.outerWidth();
                    var $high = $imgX.outerHeight()-$zoom.outerHeight();

                    if($left<0) $left = 0;
                    if($left>$wide) $left = $wide;
                    if($top<0) $top = 0;
                    if($top>$high) $top = $high;

                    // 放大区域
                    $zoom.css({left: $left, top: $top});
                    $imgL.css({left: -$left/$ratio,top: -$top/$ratio});
                }
                function leave(){
                    $zoom.hide();
                    $large.hide();
                }
            }
        });
        return this;
    }
})(jQuery);
