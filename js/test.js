
$(function(){
	// 幫 #menu li 加上 hover 事件
	$('#menu li').hover(function(){
		// 先找到 li 中的子選單
		var _this = $(this),
			_subnav = _this.children('ul');
 
		// 變更目前母選項的背景顏色
		// 同時顯示子選單(如果有的話)
		//_this.css('backgroundColor', '#b59465');
		_this.css('-webkit-border-radius', '10px');
		_this.css('-moz-border-radius', '10px');
		_subnav.stop(true, true).fadeIn(800);
	} , function(){
		// 變更目前母選項的背景顏色
		// 同時隱藏子選單(如果有的話)
		// 也可以把整句拆成上面的寫法
		$(this).css('backgroundColor', '').children('ul').stop(true, true).fadeOut(0);
	});
 
	// 取消超連結的虛線框
	$('a').focus(function(){
		this.blur();
	});
});
