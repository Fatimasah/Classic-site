$(document).ready(function () {
	$('.carousel').carousel
	({
		interval:6000       //to control slider time move
	});

	// change main color 
	var colorLi = $(".color-option ul li");
	colorLi
	.eq(0).css("backgroundColor", "#e41b17").end()
	.eq(1).css("backgroundColor", "#ca6161").end()
	.eq(2).css("backgroundColor", "#337ab7").end()
	.eq(3).css("backgroundColor", "#009aff").end()
	.eq(4).css("backgroundColor", "#3c763d").end()
	.eq(5).css("backgroundColor", "#ffd500");
	colorLi.click(function () {
		var color_li = $( this ).css( "background-color");
		document.documentElement.style.setProperty('--main-color', color_li);
		});

	// scroll top 
	var scrollBtn = $(".scroll-top");
	$(window).scroll(function () {
			// console.log($(this).scrollTop()); to show in console screen the num px of scroll
			if ($(this).scrollTop()>=700)
			{
				scrollBtn.show();
			}
			else{scrollBtn.hide();}             
			// $(this).scrollTop()>=700 ? scrollBtn.show(): scrollBtn.hide();    //abriviation if
		});
		scrollBtn.click(function () {
			$("html, body").animate({scrollTop: 0}, 600);
			return false;
			});
}); //end redy document

	    // loading screen
$(window).on('load', function () {
	$(".loading-overlay .spinner").fadeOut(2000,
		function() {
	    	$("body").css("overflow","auto");
	    	$(this).parent().fadeOut(2000,
	    		function() {
	    			$(this).remove();
	    			});
	    });
});
 