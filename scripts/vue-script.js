var screens=
    {
        Title:"haha",
        BackgroundMusic:
        {
          Src:" ",//audio/Stronger.m4a
          IsLoop:'loop',
          IsShowLogo:'block',
          IsAutoStart:'autoplay'
        },
		ExtendCss:["ssss.css"],   //额外扩展的css,用于处理需要另外扩展动画效果或者样式时的处理
		ExtendScript:["ssss.js"],  //额外扩展的js脚本文件地址
        Pages:
        [
          ///the first page
          {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/0.jpg"
            },
            Elements:
            [ 
              {  //文本元素
                  Type:2,
                  ID:"",
                  Src:"imgs/0-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:38,
                    Y:0,
                    Z:999  
                  },
                  Animation:
                  {
                     Name:"slideToLeft",
                     Speed:'1s',
                     Delay:'2s'
                  }
              },
              {  //图片元素
                  Type:2,
                  ID:"",
                  Src:"imgs/0-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:50,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"tada",
                     Speed:'1s',
                     Delay:'2s'
                  }
              },
              {  //图片元素
                  Type:2,
                  ID:"",
                  Src:"imgs/0-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:52,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'1s',
                     Delay:'2s'
                  }
              } 
                
            ] 

          },
          /////the first page done  

          ///the second page
          {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/1.jpg"
            },
            Elements:
            [
            //the  
            {  //文本元素
                  Type:2,
                  ID:"",
                  Src:"imgs/1-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:26,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToLeft",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //图片元素
                  Type:2,
                  ID:"",
                  Src:"imgs/1-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:40,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //文本元素
                  Type:2,
                  ID:"",
                  Src:"imgs/1-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:73,
                    Y:0,
                    Z:3 
                  },
                  Animation:
                  {
                     Name:"zoomIn",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //文本元素
                  Type:2,
                  ID:"",
                  Src:"imgs/1-4.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:65,
                    Y:0,
                    Z:4  
                  },
                  Animation:
                  {
                     Name:"rotate", 
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //文本元素
                  Type:2,
                  ID:"",
                  Src:"imgs/1-5.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:65,
                    Y:0,
                    Z:5  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/1-6.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:82,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:" ",
                     Speed:'1s',
                     Delay:'2s'
                  }
              } 
               
              
              
            ] 

          },
          /////the second page done  

          //the third 
          {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/2.jpg"
            },
            Elements:[

            ]
          }
          //the third end


        ] 
      }
 
//init Vue 
Vue.config.debug = true

  new Vue({
    el:'#box',
    data:{ 
       screens:screens, 
       pages:screens.Pages 
    } 
  })


 