(function($) {
	$.fn.changeNews = function(news){
		/**近期活动轮播效果**/
	  	var newsText="<div class='active' style='top:0px'>";
	  	$.each(news, function(i,val){
	  		newsText += val+"</div><div>";
	  	});
	  	newsText = newsText.slice(0, -5);
	  	this.html(newsText);
	  	changeNews();
	  	function changeNews(){
	    	setTimeout(function(){
	      		var current = $(".news div.active"),
	          		next;
	      		if(current.next().length == 1) {
	        		next = current.next();
	      		}
	      		else {
	        		next = $(".news div").first();
	      		}
	      		current.animate({
	        		top:"-=30"
	      		}, {
	          		duration:2000,
	          		queue:false,
	          		complete: function(){
	            		current.removeClass("active").css("top","30px");
	          		}
	        	});
	      		next.animate({
	          		top:"-=30"
	        	}, {
	          		duration:2000, 
	          		queue: false,
	          		complete:function(){
			            next.addClass("active");
			            changeNews();
	          		}
	        	});
	    	}, 2000);
	  	}
	};
})(jQuery);