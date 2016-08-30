modules.define('basket', ['i-bem__dom', 'jquery', 'dom', 'functions__throttle'], function(provide, BEMDOM, $, dom, throttle) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;

			}
        }
	},

	getDefaultParams: function() {

	}
}
));

});
