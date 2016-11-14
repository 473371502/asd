$(function(){
	//轮播图	
	var n = 0;
	var count = $(".top4 .box ul li").length;
	var timer = setInterval(ca,3000);
	$(".top4 .box ol li").mousemove(function(){
		clearInterval(timer);
		$(".top4 .box ol li").attr("class","");
		console.log($(this));
		$(this).attr("class","w1");
		$(".top4 .box ul li").stop().fadeTo(1500,0);
		$(".top4 .box ul li").eq($(this).index()).stop().fadeTo(1500,1);
		n=$(this).index();
	})
	$(".top4 .box ol li").mouseout(function(){
		timer = setInterval(ca,3000);
	})

	$(".top4 .box ul li").mousemove(function(){
		clearInterval(timer);
	})
	$(".top4 .box ul li").mouseout(function(){
		timer = setInterval(ca,3000);
	})
	function ca(){	
		$(".top4 .box ul li ").stop().fadeTo(1500,0);
		$(".top4 .box ul li ").eq(n).stop().fadeTo(1500,1);
		$(".top4 .box ol li").attr("class","");
		$(".top4 .box ol li").eq(n).attr("class","w1");
		n++;
		if(n>=count){
			n=0;
		}
	}
	//滑动固定导航栏
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=165){
			$(".top3").css({position:"fixed",top:"0",left:"0",zIndex:"9"});
		}else{
			$(".top3").css("position","relative");
		}
	})
	//滑动固定小框
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=684){
			$(".top6 .xiaokuang").css({position:"fixed",left:"12%",top:"100px"});
		}else{
			$(".top6 .xiaokuang").css("position","absolute");
		}
		if(top<1117){
			$(".top6 .xiaokuang li").attr("class","");
			$(".top6 .xiaokuang li").eq(0).attr("class","w2");
		}else if(top=1117){
			$(".top6 .xiaokuang li").attr("class","");
			$(".top6 .xiaokuang li").eq(1).attr("class","w2");
		}
	})
	//刷新倒计时
	var endTime = new Date();
	endTime.setSeconds(endTime.getSeconds()+5);
	var timer = setInterval(next,20);
	function next(){
		var nowTime = new Date();
		var result = endTime.valueOf() - nowTime.valueOf();
		var hour = Math.floor((result%(24*60*60*1000))/(60*60*1000));
		var minute = Math.floor((result%(60*60*1000))/(60*1000));
		var second = Math.floor((result%(60*1000))/(1000));
		$(".top5 .box .boxh").html(hour);
		$(".top5 .box .boxm").html(minute);
		$(".top5 .box .boxs").html(second);
		if(result<=0){
			$(".top5 .box").css("display","none");
			$(".top5 .box1").css("display","block");
			$(".top5 .box .boxh").html("0");
			$(".top5 .box .boxm").html("0");
			$(".top5 .box .boxs").html("0");
		}
	}
	//进入专场点击事件
	$(".top6 .boxb .boxb3").click(function(){
		open("../html/nvzhuang.html");
	})
	//账号登陆后
	$(".top1 .r2 a").eq(0).html(getCookie("name"));
	console.log($(".top1 .r2 a").eq(0).html());
	if($(".top1 .r2 a").eq(0).html()==""){
		$(".top1 .r1").css({display:"block"});
		$(".top1 .r2").css({display:"none"});
	}else{
		$(".top1 .r1").css({display:"none"});
		$(".top1 .r2").css({display:"block"});
	}

	$(".top1 .r2").eq(1).click(function(){
		$(".top1 .r1").css({display:"block"});
		$(".top1 .r2").css({display:"none"});
		removeCookie("name");
	})

})