modules.define('goods-list', ['i-bem__dom', 'jquery', 'dom', 'functions__throttle'], function(provide, BEMDOM, $, dom, throttle, GoodsList) {

provide(GoodsList.decl({ modName : 'aside', modVal : 'left' }, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;

				this._getLastGoods();

				throttle(this.bindToWin('resize load', function(e) {
					this._getLastGoods();
				}), 300);

				this._anchor = this.elem('aside-toggle');
				this._aside = this.elem('aside');

				this.findBlockInside('control-group').bindTo('pointerclick', function(e){
					e.preventDefault();

					// dom.contains(this._aside, $(e.target)) || dom.contains(this._anchor, $(e.target))

					this.findBlocksInside('button').map(function(button){
						if(button.domElem[0].contains(this)){
							button.setMod('view', 'action');
							_this.setMod(_this.elem('showcase'), 'style', button.getMod('style'));
						}else{
							button.delMod('view');
						}

					}, e.target);
				});


				this.elem('aside-close').on('pointerclick', function(e){
					e.preventDefault();

					_this.delMod(_this._aside, 'visible');
				});

				this._anchor.on('pointerclick', function(e){
					e.preventDefault();

					_this.setMod(_this._aside, 'visible', true);
				})
            }
        }
	},

	onElemSetMod: {
		'aside': {
			'visible': {
				true: function(){
					this.bindToDoc('pointerclick', this._onDocPointerClick);
				}
			}
		}
	},

	_onDocPointerClick: function(e){
		if(dom.contains(this._aside, $(e.target)) || dom.contains(this._anchor, $(e.target))){
			this.setMod(this._aside, 'focused', true);
			return;
		}

		this
			.delMod(this._aside, 'focused')
			.delMod(this._aside, 'visible');
	},

	_getLastGoods: function(){
		winWidth = BEMDOM.win[0].outerWidth;

		if(winWidth < 419){
			this._lastGoodsInRow(1);
		}else if (420 < winWidth < 799) {
			this._lastGoodsInRow(3);
		}else if (800 < winWidth < 1199) {
			this._lastGoodsInRow(2);
		}else if (1200 < winWidth < 1449) {
			this._lastGoodsInRow(3);
		}else{
			this._lastGoodsInRow(4);
		}
	},

	getDefaultParams: function() {

	}
}
));

});
