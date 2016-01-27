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
                     Delay:'0s'
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
                     Delay:'0s'
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
                     Delay:'0s'
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
                    X:75,
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
           {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/2.jpg"
            },
            Elements:[
            {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/2-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:25,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/2-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:40,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"rollIn",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/2-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:63,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"rollIn",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/2-4.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:60,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"img2-4",//自生成的动画路径 
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/2-5.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:57,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"img2-4",
                     Speed:'1s',
                     Delay:'.5s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/2-6.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:81,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:" ",
                     Speed:'1s',
                     Delay:'0s'
                  }
              }  
            ]
           },
          //the third end

         //////////////////////////////////////////
         {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/3.jpg"
            },
            Elements:[
            {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:21,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:42,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:78,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"zoomIn",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-4.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:71,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-5.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:63,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"rotate",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-6.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:63,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/3-7.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:79.5,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:" ",
                     Speed:'1s',
                     Delay:'0s'
                  }
              }  
            ]
           },
           /////////////////////////////////////////////////////
           //////////////////////////////////////////
         {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/4.jpg"
            },
            Elements:[
            {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:15,
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
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:19,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToLeft",
                     Speed:'1s',
                     Delay:'.1s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:13,
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
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-4.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:22,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-5.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:40,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-6.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:68,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToLeft",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-7.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:64,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"img2-4",///自生成动画
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/4-8.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:82.5,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:" ",
                     Speed:'1s',
                     Delay:'0s'
                  }
              }  
            ]
           },
           ///////////////////////////////////////
           {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/5.jpg"
            },
            Elements:[
            {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:11,
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
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:22,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToLeft",
                     Speed:'1s',
                     Delay:'.1s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:12,
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
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-4.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:28,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-5.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:40,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToBottom",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-6.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:64,
                    Y:0,
                    Z:4  
                  },
                  Animation:
                  {
                     Name:"zoomIn",
                     Speed:'1s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-7.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:60,
                    Y:0,
                    Z:3  
                  },
                  Animation:
                  {
                     Name:"slideToLeft",///自生成动画
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-8.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:58,
                    Y:0,
                    Z:2  
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
                  Src:"imgs/5-9.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:58,
                    Y:0,
                    Z:1 
                  },
                  Animation:
                  {
                     Name:"rollIn",
                     Speed:'1s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/5-10.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:79,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:" ",
                     Speed:'1s',
                     Delay:'0s'
                  }
              }  
            ]
           },
           ///////////////////////////////////////
           {
            Title:"haha1",
            IsDisplay:'block',
            BackgroundImage:
            {
              Src:"imgs/6.jpg"
            },
            Elements:[
            {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/6-1.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:55,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'.5s',
                     Delay:'0s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/6-2.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:64,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'.5s',
                     Delay:'.3s'
                  }
              },
              {  //按钮元素
                  Type:2,
                  ID:"",
                  Src:"imgs/6-3.png",
                  IsDisplay:'block',
                  Location:
                  {
                    X:67,
                    Y:0,
                    Z:100  
                  },
                  Animation:
                  {
                     Name:"slideToRight",
                     Speed:'.5s',
                     Delay:'.5s'
                  }
              }
            ]
           }
        ] 
      }
 
//init Vue 
 

  new Vue({
    el:'#box',
    data:{ 
       screens:screens, 
       pages:screens.Pages 
    } 
  })


 