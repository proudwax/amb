modules.define('popup', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl({ block: this.name, modName: 'tail', modVal: true }, {	
	onSetMod: {
		'js': {
            'inited': function() {
				if(this.elem('tail')[0]){
					this._getParams();
				}
            }
        },
		'direction': {
			'bottom-left': function(){
				button = this._anchor,
				tail = this.elem('tail');

				if(tail[0]){
					tail[0].style['margin-left'] = 'calc(0% + ' + (button[0].offsetWidth / 2 - tail[0].offsetWidth / 2) + 'px)';
				}
			},
			'bottom-right': function(){
				button = this._anchor,
				tail = this.elem('tail');

				if(tail[0]){
					tail[0].style['margin-left'] = 'calc(100% - ' + (button[0].offsetWidth / 2 + tail[0].offsetWidth / 2) + 'px)';
				}
			},
			'top-left': function(){
				button = this._anchor,
				tail = this.elem('tail');

				if(tail[0]){
					tail[0].style['margin-left'] = 'calc(0% + ' + (button[0].offsetWidth / 2 - tail[0].offsetWidth / 2) + 'px)';
				}
			},
			'top-right': function(){
				button = this._anchor,
				tail = this.elem('tail');

				if(tail[0]){
					tail[0].style['margin-left'] = 'calc(100% - ' + (button[0].offsetWidth / 2 + tail[0].offsetWidth / 2) + 'px)';
				}
			}
		}
	},
	_getParams : function() {
		return [
			this.params.mainOffset = 12,
			this.params.viewportOffset = 10
		];
    }
}));

});
