function ChangeSize(size){
	if(size==3)
	{
		$('body').attr("style","font-size:1.3em");
	}
		
	else if(size==2)
	{
		$('body').attr("style","font-size:1.15em");
	}
	else if(size==1)
	{
		$('body').attr("style","font-size:1em");
	}
}


// 模拟单选
$(function(){
	$(".sex span").click(function(){
		$(this).addClass("checked").siblings("span").removeClass("checked");
	});
});

$(function(){
	$(".chk span").click(function(){
		$(this).addClass("checked").siblings("span").removeClass("checked");
	});
});

// 关闭弹出框
$(".btn_close").click(function(){
	$("#textPop").css("display","none");
	return false;
});

// 
function hide(){
	$(".text").val("");
}

// 单位切换
$(function(){
	$(".su").click(function(){
		$(this).addClass("checked").siblings("span").removeClass("checked");
		$(".s1").css("display","inline-block");
		$(".s2").css("display","none");
		hide();
	});
	$(".si").click(function(){
		$(this).addClass("checked").siblings("span").removeClass("checked");
		$(".s1").css("display","none");
		$(".s2").css("display","inline-block");
		hide();
	});
});