$(function(){
		$(".swiper-slide.one .w2").animate({top:"230px",opacity:"1"},1500);
		//$(".swiper-slide.two .w2").animate({top:"230px",opacity:"1"},1500);
	var getTranslateY = function(node){
	    var regRule = /translate(Y|\dd)?\(\s*(\w+\s*,)?\s*([^,]+)(\s*,[^)]+)?\s*\)/;
	    var regRule2 = /matrix\(.*,\s*(\w+)\s*\)/;
	    var transform = node.style.transform;
	    var reg;
	    reg = regRule.exec(transform);
	    if(null === reg){
	        reg = regRule2.exec(transform);
	        return reg ? reg[1] : null;
	    }
	    return reg[3];
	}
	$('.swiper-wrapper').on('mousewheel', function(event, delta, deltaX, deltaY) {
		//判断次数
		var self = this;
		setTimeout(function(){
			var transf = parseInt(getTranslateY(self))	
			console.log(transf)
			if(transf==(-572)){
				$(".swiper-slide.two .w2").animate({top:"230px",opacity:"1"},1500);
			} 
			if(transf==(-1144)){
				$(".swiper-slide.three .w2").animate({top:"171px",opacity:"1"},1500);
			}
			if(transf==(-1716)){
				$(".swiper-slide.four .w2").animate({top:"244px",opacity:"1"},1500);
			}
		},10)
	});
})