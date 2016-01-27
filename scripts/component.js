 //screen component                    
Vue.component('screen',{
	template:'#screen-template', 
	props:{
		pages:Array 
	}, 
	methods:{

	},
	components:{
		'word':{
			template:'#word-template',
			props:{ 
				detail:Object
			} 
		},
		'picture':{
			template:'#image-template',
			props:{
				 detail:Object
			},
			methods:{ 

			} 
		},

		'press':{
			template:'#press-template',
			props:{
				detail:Object
			}
		},

		'lottery':{
			template:'#lottery-template',
			props:{
				detail:Object
			},
			methods:{
				////////////////////
				startSpin:function(e){
					var e = window.event || event;
				    e.preventDefault();  

				    var prize = 0;//设定奖项的种类0,1,2,3三种种类
				    //安慰奖
				    if(prize == 0){
				    	var stopStep=[1,3];//设定最终停止的位置的数组
					    stopStep = stopStep[Math.floor(Math.random()*stopStep.length)];
				    }
				    //三等奖
				    if (prize == 1) {
				    	var stopStep=[2,4];//设定最终停止的位置的数组
					    stopStep = stopStep[Math.floor(Math.random()*stopStep.length)];
				    }
				    //二等奖
				    if (prize == 2) {
				    	var stopStep=[5,7];//设定最终停止的位置的数组
					    stopStep = stopStep[Math.floor(Math.random()*stopStep.length)];
				    }
				    //一等奖
				    if (prize == 3) {
				    	var stopStep=[0,6];//设定最终停止的位置的数组
					    stopStep = stopStep[Math.floor(Math.random()*stopStep.length)];
				    }
					 
    				var runT=null;   
    				var step=-1;    
   					var during=2;   

   					 $(".mask").css("display","block");
        			//stopStep = Math.floor(Math.random()*8+1);  
        			runT = setTimeout(runF,100);   

    				function runF(){  

        				if(step >= (32+stopStep))  
        				{  
           					$(".gift"+(step%8)).css("background-color","#FFAEC9");  
            				step=stopStep;  
            				var text = $(".gift"+step).text();
            				alert( text );  
            				clearTimeout(runT);
            				$(".mask").css("display","none");  
            				return;  
       					}   

        				if(step>=(24+stopStep)){  
                  			during+=1;                 
              			}else{   
                  		if(during<=2){  
                      		during=2;   
                 	 	}   
                  			during--;   
            			}             
        				
        				step++;  
        				
        				$(".gift-cover").each(function(index, element) {  
            				$(this).css("background-color","transparent");  
        				});  
        				$(".gift"+(step%8)).css("background-color","#FFAEC9");  
        					runT=setTimeout(runF,during*50);   
    				    }
    				 
				}
				/////////////////// 
			}
		},

		'lottery-plate':{
			template:'#lottery-plate-template',
			props:{
				detail:Object
			},
			methods:{
				//////////////////////////
				startRun:function(e){ 
					var e = window.event || event;
					e.preventDefault();

					var size = 0;
					var Bstop = true;
					var timer = null;
					var prize = 1;

					if(Bstop){
						num = 0; 
						size = 0;
						$('.plate').css('transform','rotate(0deg)');
						$('.plate').css('-webkit-transform','rotate(0deg)'); 

						if( prize == 0 ){
							var reg = [22,67];
						    reg = reg[Math.floor(Math.random()*reg.length)];
						    startMove(reg,'安慰奖');
						}
						if( prize == 1 ){
							var reg = [112,157];
						    reg = reg[Math.floor(Math.random()*reg.length)];
						    startMove(reg,'三等奖');
						}
						if( prize == 2 ){
							var reg = [202,247];
						    reg = reg[Math.floor(Math.random()*reg.length)];
						    startMove(reg,'二等奖');
						}
						if( prize == 3 ){
							var reg = [292,337];
						    reg = reg[Math.floor(Math.random()*reg.length)];
						    startMove(reg,'一等奖');
						} 
					}

					function startMove(deg,text){

						clearInterval(timer);

						timer = setInterval(function(){
							Bstop = false;
							$(".mask").css("display","block");
							if(size<5){
								num += 20;
								$('.plate').css('transform','rotate('+ num +'deg)');
								$('.plate').css('-webkit-transform','rotate('+ num +'deg)');
								if(num>=360){
									num = 0;
									size++;
								}
							}else if(size == 5){
								var speed=(deg-num)/20;
                      				speed=speed>0?Math.ceil(speed):Math.floor(speed);
                      			num+=speed;
                      			$('.plate').css('transform','rotate('+num +'deg)');
                      			$('.plate').css('-webkit-transform','rotate('+ num +'deg)');
                      			if(num==deg){
                          			clearInterval(timer);
                          			alert(text);
                          			$(".mask").css("display","none");
                          			Bstop=true;
                      			}
							} 
						},30);
					}  
				 
				}
				////////////////////////// 
			}

		}
 
	}
}) 
 
