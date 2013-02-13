jQuery(document).ready(function() {
	
	setUpTitles = function() {
		$("a[title]").each(function() {
			var el = $(this);
			var thisTitle = el.attr("title");
			el.data("title", thisTitle);
			el.removeAttr("title");
		});
	}
	
	$("a").mouseover(function() {
		var toolTipText = $(this).data("title");
		
		var $tooltip = $("<div/>");
		$tooltip.html(toolTipText);
		$tooltip.addClass("tooltip");
		$tooltip.appendTo("body");
		
		var $arrow = $("<div/>").addClass("arrow");
		$arrow.appendTo($tooltip);
		
		var linkPos = $(this).position();
		
		$(".tooltip").css({
			top: linkPos.top - $tooltip.outerHeight() - $(this).height(),
			left: linkPos.left - ($tooltip.width()/2)
		});
		
		setTimeout(function() {
			$(".tooltip").addClass("active");
		},100)
		
	});
	
	$("a").mouseout(function(){
		
		$(".tooltip").addClass("out");
		
		setTimeout(function(){
			$(".tooltip").remove();
		},300)
		
		
		
	});
	
	
	setUpTitles();
});