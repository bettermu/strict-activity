(function($,w,doc){

	
	$(function(){
		/*轮播切换效果*/
			/*轮播初始化*/
			var num=0;
			var len=$('.banner .show a').length;
			change(0);

			/*点击切换*/
			$('.banner .pagination span.next').on('click',function(){
				++num>len-1?num=0:num=num;
				change(num);
			})
			$('.banner .pagination span.prev').on('click',function(){
				--num<0?num=len-1:num=num;
				change(num);
			})
			/*切换方法*/
			function change(num){
				$('.banner .show a').eq(num).css('display','block').siblings().css('display','none');
				$('.banner .title a').eq(num).css('display','block').siblings().css('display','none');
				$('.banner .page .now').html(num+1);
				$('.banner .page .totle').html(len);
			}


		/*链接跳转*/
		$(w).scroll(function(){
			var top=$(w).scrollTop();
			if(top>=$('.product').eq(0).offset().top){
				$('.link').css('display','block');
			}else {
				$('.link').css('display','none');
			}
			var len=$('.product').length;
			for(var i=0;i<len;i++){
				if(top>=$('.product').eq(i).offset().top){
					$('.link a').removeClass('active');
					$('.link a').eq(i).addClass('active');
					
				}
			}
		})


		/*锚点点击切换*/
		$('.link a').on('click',function(e){
			var index=$(this).index();
			var linkTop=$('.product').eq(index).offset().top;
			$('body').animate({scrollTop:linkTop},300);
		})
		
	})
	



})(jQuery,window,document)