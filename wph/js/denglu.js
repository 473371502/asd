$(function(){
	//更多的点击事件
	var count = 1;
	$(".top2 .box .box3 a").click(function (){
		$(".top2 .box .box4").toggleClass("box5",count++%2==0);
	})
	//登录点击事件
	$(".top2 .box1 button").click(function(){
		var k1=getCookie("name");
		var k2=getCookie("password");
		var flag = false;
		var flag1 = false;
		if($(".top2 .box1 input").eq(0).val()==k1 && $(".top2 .box1 input").eq(1).val()==k2){
			flag = true;
		}
		else{
			flag = false;
		}



		var url = "../json/a.json";
		$.ajax({
                type:"get",
                url:url,
                success: function (response,status,xhr) {
                    if (status == "success") {
	                    var str =response;//eval("("+response+")");
	                    // for(var j=0;j<arr.length;j++)
	                    // {
                     //    	var obj=arr[j];
                     //    	var user=obj.name;
                     //    	var pws=obj.password;
                     //    }
                    var user=str.name;
             		var pws=str.password;
             		console.log(user);
             		console.log(pws);
                    	if($(".top2 .box1 input").eq(0).val()==user&&$(".top2 .box1 input").eq(1).val()==pws){
                    		flag1 = true;
                    	}else{
                    		flag1 = false;
                    	}
                    	console.log(flag1);
                    	if(flag1){
                    		var date = new Date();
							date.setDate(date.getDate()+10);
							setCookie("name",user,date);
							open("../html/shouye.html","_self");
						}
	                    
                    }
                },
                error: function () {
                    alert("异步请求出问题");
                },
                beforeSend: function () {

                }
            })
		if(flag){
			open("../html/shouye.html","_self");
		}
	})
})
