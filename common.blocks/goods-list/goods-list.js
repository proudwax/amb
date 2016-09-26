 modules.define('goods-list', ['i-bem__dom', 'jquery', 'dom'], function(provide, BEMDOM, $, dom) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;
            }
        }
	},

	_lastGoodsInRow: function(countInRow){
		var _this = this,
            length = this.elem('item').length,
			lastId = length % countInRow;

		if(length == lastId){
			this.setMod(this.elem('item'), 'last-in-row', true);
		}else{
			this.elem('item').map(function(item) {
				_this.setMod($(this), 'last-in-row', length - lastId <= item);
			});
		}
	},

	getDefaultParams: function() {

	}
}
));

});
