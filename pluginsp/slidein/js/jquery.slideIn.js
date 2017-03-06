// JavaScript Document
(function($){
	$.fn.slideInLeft = function(options){
		var settings = $.extend({
			speed : 400,
			distance : '100px',
			startOpacity : '0',
			opacitySpeed : 400,
		}, options);
		var startDistance = ('-' + settings.distance);
		return this.each(function(){
			$(this).css('opacity', settings.startOpacity);
			$(this).css('position', 'relative');
			$(this).css('left', startDistance);
			$(this).css('display', 'block');
			$(this).animate({left: 0}, {duration: settings.speed, queue: false});
			$(this).animate({opacity: 1}, {duration: settings.opacitySpeed, queue: false});
		});
	}
	$.fn.slideInRight = function(options){
		var settings = $.extend({
			speed : 400,
			distance : '100px',
			startOpacity : '0',
			opacitySpeed : 400,
		}, options);
		var startDistance = ('-' + settings.distance);
		return this.each(function(){
			$(this).css('opacity', settings.startOpacity);
			$(this).css('position', 'relative');
			$(this).css('right', startDistance);
			$(this).css('display', 'block');
			$(this).animate({right: 0}, {duration: settings.speed, queue: false});
			$(this).animate({opacity: 1}, {duration: settings.opacitySpeed, queue: false});
		});
	}
	$.fn.slideInDown = function(options){
		var settings = $.extend({
			speed : 400,
			distance : '100px',
			startOpacity : '0',
			opacitySpeed : 400,
			comeDown: true,
			comeUp: null,
		}, options);
		var topDistance = (settings.top);
		if (settings.comeDown){
			var topDistance = ('-' + settings.distance);
		}
		if (settings.comeUP){
			var topDistance = (settings.distance);
		}
		return this.each(function(){
			$(this).css('opacity', settings.startOpacity);
			$(this).css('position', 'relative');
			$(this).css('top', topDistance);
			$(this).css('display', 'block');
			$(this).animate({top: 0}, {duration: settings.speed, queue: false});
			$(this).animate({opacity: 1}, {duration: settings.opacitySpeed, queue: false});
		});
	}
	$.fn.slideInUp = function(options){
		var settings = $.extend({
			speed : 400,
			distance : '100px',
			startOpacity : '0',
			opacitySpeed : 400,
			comeDown: null,
			comeUp: true,
		}, options);
		var topDistance = (settings.distance);
		if (settings.comeDown){
			var topDistance = ('-' + settings.distance);
		}
		if (settings.comeUP){
			var topDistance = (settings.distance);
		}
		return this.each(function(){
			$(this).css('opacity', settings.startOpacity);
			$(this).css('position', 'relative');
			$(this).css('top', topDistance);
			$(this).css('display', 'block');
			$(this).animate({top: 0}, {duration: settings.speed, queue: false});
			$(this).animate({opacity: 1}, {duration: settings.opacitySpeed, queue: false});
		});
	}
	$.fn.slideInDiagonal = function(options){
		var settings = $.extend({
			speed : 400,
			distance : '100px',
			startOpacity : '0',
			opacitySpeed : 400,
			left : true,
			right : null,
			comeDown: null,
			comeUp: null,
		}, options);
		var topDistance = (settings.distance);
		if (settings.left){
			var startDistance = ('-' + settings.distance);
		}
		if (settings.right){
			var startDistance = (settings.distance);
		}
		if (settings.comeDown){
			var topDistance = ('-' + settings.distance);
		}
		if (settings.comeUP){
			var topDistance = (settings.distance);
		}
		return this.each(function(){
			$(this).css('opacity', settings.startOpacity);
			$(this).css('position', 'relative');
			$(this).css('left', startDistance);
			$(this).css('top', topDistance);
			$(this).css('display', 'block');
			$(this).animate({left: 0}, {duration: settings.speed, queue: false});
			$(this).animate({top: 0}, {duration: settings.speed, queue: false});
			$(this).animate({opacity: 1}, {duration: settings.opacitySpeed, queue: false});
		});
	}
}(jQuery));