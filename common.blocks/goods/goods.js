modules.define('goods', ['i-bem__dom', 'BEMHTML', 'jquery', 'dom', 'popup'], function(provide, BEMDOM, BEMHTML, $, dom, Popup) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;
					buttonPreview = this.findBlockInside({ block: 'button', modName: 'preview', modVal: true });

				// console.log(buttonPreview);

				buttonPreview.on('pointerclick', function(e){
					e.preventDefault();

					_this._getData();
				});
            }
        }
	},

	_getData: function(){
		BEMDOM.append(dom, BEMHTML.apply({
			block: 'popup',
			mods: { theme: 'islands', autoclosable: true, visible: true },
			content: 're'
		}));
	},

	getDefaultParams: function() {

	}
}
));

});
