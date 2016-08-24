modules.define('basket', ['i-bem__dom', 'jquery', 'dom'], function(provide, BEMDOM, $, dom) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this,
					link = this.elem('icon'),
					popup = this.findBlockInside('popup').setAnchor(this);

				console.log(link);

                link.on('click', function(e) {
					e.preventDefault();

                    popup.toggleMod('visible');
                });
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

	},

	getDefaultParams: function() {

	}
}
));

});
