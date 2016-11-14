$(function(){
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

	console.log(getCookie("img1"));
	console.log(getCookie("shangpin1"));
	console.log(getCookie("chima1"));
	console.log(getCookie("jiage1"));
	console.log(getCookie("shuliang1"));
	//console.log(getCookie("jiage1"));
	$(".top4 .box2 li img").attr("src",getCookie("img"));
 	$(".top4 .box2 li p")eq(0).html(getCookie("shangpin"));
	//$(".top4 .box2 li p")eq(1).html(getCookie("chima"));
 	$(".top4 .box2 li").eq(4).html(getCookie("jiage"));
 	$(".top4 .box2 li").eq(3).html(getCookie("shuliang"));
 	$(".top4 .box2 li").eq(2).html(getCookie("jiage"));
 })