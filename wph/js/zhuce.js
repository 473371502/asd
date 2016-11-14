$(function(){
	//手机注册和邮箱注册转换
	$(".box1 .tiao").click(function(){
		$(".top2 .box1").css("display","none");
		$(".top2 .box3").css("display","block");
	})
	//手机注册
	//1.手机号码框
	var flag = false;
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	$(".box1 input").eq(0).blur(function(){
		var str = $(".box1 input").eq(0).val();
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(str)){
			$(".top2 .box1 .boxsj").css("display","block");
			flag = false;
		}else{
			$(".top2 .box1 .boxsj").css("display","none");
			flag = true;
		}
	})
	//2.第一密码框
	$(".box1 input").eq(1).blur(function(){
	
        var str1 = $(".box1 input").eq(1).val();
        console.log(str1);
        var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(reg1.test(str1)){
        	flag1=true;
        	$(".top2 .box1 .boxm1").css("display","none");
        }else{
        	flag1 = false
        	$(".top2 .box1 .boxm1").css("display","block");
        }
	})
	//3.第二个密码框
	$(".box1 input").eq(2).blur(function(){
		var str1 = $(".box1 input").eq(1).val();
		var str2 = $(".box1 input").eq(2).val();
		if(str1==str2){
			flag2 = true;
			$(".top2 .box1 .boxm2").css("display","none");
		}else{
			flag2 = false;
			$(".top2 .box1 .boxm2").css("display","block");
		}
	})
	//密码安全级别判断
	$(".box1 input").eq(2).keyup(function(){
		var str1 = $(".box1 input").eq(2).val(); 
		var reg2 = /^\w{6,20}$/;
		//低级密码
		var reg123=/^\w{6,10}$/
        var reg471=/^\d{11,20}$/
        var reg472=/^[a-zA-Z]{11,20}$/
        var reg473=/^_{11,20}$/
        //高级密码
        var reg91=/\d{1,}/ig;
        var reg92=/[a-zA-Z]{1,}/ig
        var reg93=/_{1,}/ig
        var reg94=/^\w{16,20}$/
        if(reg2.test(str1)){
        	if(reg123.test(str1)||reg471.test(str1)||reg472.test(str1)||reg473.test(str1)){
	        	$(".box1 .boxm3").css("display","block");
	        	$(".box1 .boxm3").html("弱");
	        	
	        }else if(reg91.test(str1)||reg92.test(str1)||reg93.test(str1)||reg94.test(str1)){
	        	$(".box1 .boxm3").css("display","block");
	        	$(".box1 .boxm3").html("高");
	        	
	        }else{
	        	$(".box1 .boxm3").css("display","block");
	        	$(".box1 .boxm3").html("中");
	        }
        }else{
        	$(".box1 .boxm3").css("display","none");
        }
        
	}) 
	//邮箱注册
	//1.邮箱框
	$(".box3 input").eq(0).blur(function(){
		var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
		var str = $(".box3 input").eq(0).val();
		console.log(str);
		if(reg.test(str)){
			flag = true;
			$(".box3 .boxyx").css("display","none");
		}else{
			flag = false;
			$(".box3 .boxyx").css("display","block");
		}
	})
	//2.密码框
	$(".box3 input").eq(1).blur(function(){
		var str1 = $(".box3 input").eq(1).val();
        console.log(str1);
        var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(reg1.test(str1)){
        	flag1 = true;
        	$(".top2 .box3 .boxm1").css("display","none");
        }else{
        	flag1 = false;
        	$(".top2 .box3 .boxm1").css("display","block");
        }
	})
	//3.重复输入密码框
	$(".box3 input").eq(2).blur(function(){
		var str1 = $(".box3 input").eq(1).val();
		var str2 = $(".box3 input").eq(2).val();
		if(str1==str2){
			flag2 = true;
			$(".top2 .box3 .boxm2").css("display","none");
		}else{
			flag2 = false;
			$(".top2 .box3 .boxm2").css("display","block");
		}
	})
	//4.密码安全级别
	$(".box3 input").eq(2).keyup(function(){
		var str1 = $(".box3 input").eq(2).val(); 
		var reg2 = /^\w{6,20}$/;
		//低级密码
		var reg123=/^\w{6,10}$/
        var reg471=/^\d{11,20}$/
        var reg472=/^[a-zA-Z]{11,20}$/
        var reg473=/^_{11,20}$/
        //高级密码
        var reg91=/\d{1,}/ig;
        var reg92=/[a-zA-Z]{1,}/ig
        var reg93=/_{1,}/ig
        var reg94=/^\w{16,20}$/
        if(reg2.test(str1)){
        	if(reg123.test(str1)||reg471.test(str1)||reg472.test(str1)||reg473.test(str1)){
	        	$(".box3 .boxm3").css("display","block");
	        	$(".box3 .boxm3").html("弱");
	        	
	        }else if(reg91.test(str1)||reg92.test(str1)||reg93.test(str1)||reg94.test(str1)){
	        	$(".box3 .boxm3").css("display","block");
	        	$(".box3 .boxm3").html("高");
	        	
	        }else{
	        	$(".box3 .boxm3").css("display","block");
	        	$(".box3 .boxm3").html("中");
	        }
        }else{
        	$(".box3 .boxm3").css("display","none");
        }
	})
	//手机框
	$(".box3 input").eq(3).blur(function(){
		var str = $(".box3 input").eq(3).val();
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(str)){
			flag3 = false;
			$(".top2 .box3 .boxsj").css("display","block");
		}else{
			flag3 = true;
			$(".top2 .box3 .boxsj").css("display","none");
		}
	})
	//手机注册的注册点击事件
	$(".box1 button").eq(0).click(function(){
		if(flag&&flag1&&flag2){
			var date = new Date();
			date.setDate(date.getDate()+10);
			setCookie("name",$(".box1 input").eq(0).val(),date);
			setCookie("password",$(".box1 input").eq(1).val(),date);
			open("../html/shouye.html","_self");
		}
	})
	//邮箱注册的注册点击事件
	$(".box3 button").eq(0).click(function(){
		if(flag&&flag1&&flag2&&flag3){
			var date = new Date();
			date.setDate(date.getDate()+10);
			setCookie("name",$(".box3 input").eq(0).val(),date);
			setCookie("password",$(".box3 input").eq(1).val(),date);
			open("../html/shouye.html","_self");
		}
	})
})