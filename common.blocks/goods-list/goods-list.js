modules.define('goods-list', ['i-bem__dom', 'jquery', 'dom'], function(provide, BEMDOM, $, dom) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;
            }
        }
	},

	_lastGoodsInRow: function(lastCount){
		var _this = this,
                    length = this.elem('item');

		console.log(this);
		console.log(this.elem('item')[1]);

		
                this.elem('item').map(function(item) {
		    this.toggleMod(this.elem('item')[item], 're', length - lastCount < item);	
		});

	},

	getDefaultParams: function() {

	}
}
));

});
