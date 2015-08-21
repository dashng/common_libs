(function($){
	var _ajax = $.ajax;
	$.ajax = function(q){
		return _ajax($.extend(q, {
			'error': q && !q.hasOwnProperty('error')?function(){
				loadingComplete?loadingComplete():null
			}:q.error
		}));
	};
})(jQuery);