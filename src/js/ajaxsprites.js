jQuery(document).ready(function($) {

	function svg_debug(thenode){
		console.log('symbols:');
			$(thenode).find("symbol").each(function(){
                if (this.viewBox.baseVal){
					console.log("<svg class='' width='" + this.viewBox.baseVal.width + "' height='" + this.viewBox.baseVal.height + "'><use xlink:href='#" + this.id + "'/></svg>");
					if ($("#sprites").length) {
						$("#sprites").append('<svg class="icon mh4" width="64" height="64"><use xlink:href="#' + this.id + '" /></svg>');    
					}
                }
			});
	}

	$.get( (typeof apppath === 'undefined' ? "." : apppath) + "/img/sprites.svg", function(data) {
		$("body").prepend("<div id='svg-inject' style='display: none'>" + new XMLSerializer().serializeToString(data.documentElement) + "</div>")
	})
	// .success(function(){ svg_debug('#svg-inject') }) // old jQuery
	.done(function(){ svg_debug('#svg-inject') }) // jQuery 3+
	;

});