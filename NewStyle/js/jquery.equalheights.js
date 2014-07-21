/*parsed HTML*/
      
$(function(){
	$(".maxheight").each(function(){
	    $(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight1").each(function(){
	    $(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight2").each(function(){
	    $(this).contents().wrapAll("<div class='box_inner'></div>");
	})	
})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
    if ($(window).width() > 767) {
        //$(".maxheight").css({ 'height': '460px' });
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").css({'height':'auto'});
	}
	if($(window).width()>767){
		$(".maxheight1").equalHeights();
	}else{
	    $(".maxheight1").css({ 'height': 'auto' });
	}
	if($(window).width()>767){
		$(".maxheight2").equalHeights();
	}else{
	    $(".maxheight2").css({ 'height': 'auto' });
	}
	$(".maxheight .box_inner_img").css('max-height', '200px');
	$(".maxheight .box_inner_img").css('overflow', 'hidden');
	$(".maxheight .box_inner_img").css('margin-bottom', '20px');
	$(".maxheight1 .box_inner_img").css('max-height', '200px');
	$(".maxheight1 .box_inner_img").css('overflow', 'hidden');
	$(".maxheight1 .box_inner_img").css('margin-bottom', '20px');
	$(".maxheight2 .box_inner_img").css('max-height', '200px');
	$(".maxheight2 .box_inner_img").css('overflow', 'hidden');
	$(".maxheight2 .box_inner_img").css('margin-bottom', '20px');
}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
