modules.define('goods-list', ['i-bem__dom', 'jquery', 'dom'], function(provide, BEMDOM, $, dom, GoodsList) {

provide(GoodsList.decl({ modName : 'aside', modVal : 'left' }, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;

				this._lastGoodsInRow(3);

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

	getDefaultParams: function() {

	}
}
));

});
