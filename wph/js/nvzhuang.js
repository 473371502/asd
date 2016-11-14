$(function(){
	$(".top4").click(function(){
		open("../html/nvzhuangxuangou.html");
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