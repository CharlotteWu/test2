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
	})
	
	$('.sec' + index + ' .animationItem').each(function (){
		var ani=$(this).data('animation');
		$(this).css('animation-play-state','');
		$(this).css('animation-name',ani);
		$(this).css('-webkit-animation-play-state','')
		$(this).css('-webkit-animation-name',ani);
		
	})
    
}


var pageSlider;
 
	var query=GetRequest(); 
	var dynamicID=query['id'];//获取动态场景ID
	/*
		通过Ajax读取json数据包
	*/ 
 
pageSlider = PageSlider.case({ 
			duration:350,
			elastic:false, 
			callback:onPageChanged ,
			pageSwiching:function(){ $('#box').addClass('stopAnimation')},
			pageSwichCancel:function(){ $('#box').removeClass('stopAnimation')}
		}
	); 

 
 