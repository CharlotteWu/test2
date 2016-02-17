function GetRequest() {   
   var url = location.search; //获取url中"?"符后的字串   
   var theRequest = new Object();   
   if (url.indexOf("?") != -1) {   
      var str = url.substr(1);   
      strs = str.split("&");   
      for(var i = 0; i < strs.length; i ++) {   
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
      }   
   }   
   return theRequest;   
}   

function onPageChanged(index){
	$('#box').removeClass('stopAnimation');
	
	$('.prev .animationItem').each(function (){
		$(this).css('animation-play-state','paused');
		$(this).css('animation-name','');
		$(this).css('-webkit-animation-play-state','paused');
		$(this).css('-webkit-animation-name','');
	});
	
	$('.next .animationItem').each(function (){
		$(this).css('animation-play-state','paused');
		$(this).css('animation-name','');
		$(this).css('-webkit-animation-play-state','paused');
		$(this).css('-webkit-animation-name','');
	});
	
	$('.sec' + index + ' .animationItem').each(function (){
		var ani=$(this).data('animation');
		$(this).css('animation-play-state','');
		$(this).css('animation-name',ani); 
		$(this).css('-webkit-animation-play-state','');
		$(this).css('-webkit-animation-name',ani); 
		$(this).css('visibility','visible');
	});
    
}

/*-------------------first load the dom you want -----------------------*/
/*
使用data-* 属性到当前的页面进行填充src*属性
减少线程的堵塞 提高页面的加载速度
通过ajax加载图片 通过返回标识码表示是否存在文件
有则加载 反之则加载404图片
*/

function firstLoad(index){ 
	$('.sec' + index + ' .img').each(function (){ 

		var image = $(this).data('image');

		$.ajax({   
			type:"GET",
			data:image, 
			success:function(data) { 
				alert("haha");
				$(this).attr('src',image); 
			},
			error:function(data) {
				alert(data);
				$(this).attr('src','imgs/404.jpg');
			}  
		}); 

	}); 
} 

/*all callback function in here*/
function everyPage(index){
	onPageChanged(index);
	firstLoad(index);
}
/*-----------------------------*/

var pageSlider;
 
var query=GetRequest(); 
var dynamicID=query['id'];//获取动态场景ID
	/*
		通过Ajax读取json数据包
	*/ 
 
pageSlider = PageSlider.case({ 
			duration:350,
			elastic:false, 
			callback:everyPage,
			pageSwiching:function(e){ 
				var e = window.event || event;
				e.preventDefault();
				$('#box').addClass('stopAnimation')
			},
			pageSwichCancel:function(e){ 
				var e = window.event || event;
				e.preventDefault();
				$('#box').removeClass('stopAnimation')
			}
		}
	);  


$('.music').on('touchend',function(){
	 if($('.music').hasClass('play')){
	 	$('.music').removeClass('play').addClass('stop');
	 	$('.music').css('animation-play-state','paused');
	 	$('.music').css('-webkit-animation-play-state','paused');
	 	$('.music audio')[0].pause();
	 }else{
	 	$('.music').removeClass('stop').addClass('play');
	 	$('.music').css('animation-play-state','');
	 	$('.music').css('-webkit-animation-play-state','');
	 	$('.music audio')[0].play();
	 }
});

 
 