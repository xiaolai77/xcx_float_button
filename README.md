# 微信小程序 返回顶部 拨打电话 悬浮按钮


1. 把components/floatbut 文件复制到项目中

2. 在使用组件的页面 .json文件中，添加
 
	```
	{
  		"usingComponents": {
    		"floatbut": "/components/floatbut/floatbut"
  		}
	}
	```

3. 在使用组件的页面 .wxml 文件,添加以下代码

	```
  	//backTop  控制显示返回顶部按钮
    <floatbut backTop="{{backTop}}"></floatbut> 
	```
4. 在使用组件的页面 .js文件里面实现方法
 
	```
    data: {
      backTop:false
    },
    //监听页面滚动
    onPageScroll: function (e) {
        var that = this
        var scrollTop = e.scrollTop
        var backTop = scrollTop > 100 ? true : false
        that.setData({
          backTop: backTop
        })
    }
 	```
### 项目截图:

<img src="https://github.com/xiaolai77/xcx_float_button/raw/master/images/demo.png" width="320px" style="display:inline;">

 

希望大家给个星。感谢
