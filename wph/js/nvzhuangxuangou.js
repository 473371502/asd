$(function(){
//点击查看图片详情
	var n=1;
	$(".top5 .box1 .box1-2").click(function(){
		console.log($(this).index());
		$(".top5 .box1 .box1-1 img").attr("src","../img03/H5424693-"+$(this).index()+"_383x483_90.jpg");
	 n = $(this).index();
	})
	$(".top5 .box1 .box1-1").mousemove(function(evt){
		var e =evt||window.event;
		var x ="-"+(e.clientX-452+"px");
		var y ="-"+(e.clientY-165+"px");
		console.log(n);
		console.log(x);
		console.log(y);
		$(".top5 .box1 .box1-1 img").attr("class","");
		$(".top5 .box1 .box1-1 img").attr("src","../img03/H5424693-"+n+".jpg");
		$(".top5 .box1 .box1-1 img").css({position:"absolute",top:y,left:x});
	})
	$(".top5 .box1 .box1-1").mouseout(function(){
		$(".top5 .box1 .box1-1 img").attr("class","responsive-img");
		$(".top5 .box1 .box1-1 img").attr("src","../img03/H5424693-"+n+"_383x483_90.jpg");
		$(".top5 .box1 .box1-1 img").css("position","");
	})
	//购物栏尺码选择
	var flag = false;
	var m=0;
	$(".top5 .box2 .box2-3 p").click(function(){
		flag = true;
		$(".top5 .box2 .box2-3 p").attr("class","");
		$(".top5 .box2 .box2-3 p").eq($(this).index()-1).attr("class","bian");
		$(".top5 .box2 .box2-3 p i").attr("class","");
		$(".top5 .box2 .box2-3 p i").eq($(this).index()-1).attr("class","bian2");
		$(".top5 .box2 .box2-3").css("background","#fff");
		m = $(this).index()-1;
	})
	//添加物品数量
	//1.减少
	$(".top5 .box2 .box2-4 .w1").click(function(){
		var m = $(".top5 .box2 .box2-4 .w2").val();
		console.log(m);
		m--;
		console.log(m);
		if(m<=0){
			$(".top5 .box2 .box2-4 .w2").val(0);
		}else{
			$(".top5 .box2 .box2-4 .w2").val(m);
		}	
	})
	//2.增加
	$(".top5 .box2 .box2-4 .w3").click(function(){
		if(flag){
			var m = $(".top5 .box2 .box2-4 .w2").val();
			console.log(m);
			m++;
			console.log(m);
			$(".top5 .box2 .box2-4 .w2").val(m);
		}else{
			$(".top5 .box2 .box2-3").css("background","#fdedf5");
		}	
	})
	//top6 的滚动事件
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		console.log(top);
		if(top>=960){
			$(".top6 ul").css({position:"fixed",top:"0px",left:"452px"});
		}else{
			$(".top6 ul").css({position:""});
		}
	})
	//top6 的点击事件
	$(".top6 li").eq(0).click(function(){
		$(window).scrollTop(921);
	})
	$(".top6 li").eq(1).click(function(){
		$(window).scrollTop(4481);
	})
	$(".top6 li").eq(2).click(function(){
		$(window).scrollTop(5081);
	})
	$(".top6 li").eq(3).click(function(){
		$(window).scrollTop(5583);
	})
	//商品咨询的事件
	$(".top10 .box2-1").mousemove(function(){
		$(".top10 .box2-1 img").eq($(this).index()).attr("src","../img03/wd-H64E2473-7.jpg");
	})
	$(".top10 .box2-1").mouseout(function(){
		$(".top10 .box2-1 img").eq($(this).index()).attr("src","../img03/wd-H64E2473-5.jpg");
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
	//点击购物车事件
	$(".top5 .box2-5").click(function(){
		var date = new Date();
		date.setDate(date.getDate()+10);
		var url2 = $(".top5 .box1-2 img").attr("src");
		//console.log("img",url2);
		//console.log($(".top5 .box2 .box2-3 p").eq(m).html());
		//console.log($(".top5 .box2 .box2-4 input").eq(1).val());
		setCookie("img1",url2,date);
		setCookie("shangpin1",$(".top5 .q1").html(),date);
		setCookie("jiage1",$(".top5 .box2-1 i").html(),date);
		setCookie("chima1",$(".top5 .box2 .box2-3 p").eq(m).html(),date);
		setCookie("shuliang1",$(".top5 .box2 .box2-4 input").eq(1).val(),date);
		open("../html/zhifu.html");
	})
})


