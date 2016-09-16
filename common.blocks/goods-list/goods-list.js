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
		var _this = this;

		console.log(this);
		console.log(this.elem('item')[1]);

		this.toggleMod(this.elem('item')[1], 're', true);
this.elem('item').map(function(item) {
			if((_this.elem('item').length - lastCount) < item){
				_this.delMod(_this.elem('item')[item], 're');
			}else{
				_this.setMod(_this.elem('item')[item], 're', true);
			}
		});

	},

	getDefaultParams: function() {

	}
}
));

});
