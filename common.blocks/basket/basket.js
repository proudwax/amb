modules.define('basket', ['i-bem__dom', 'jquery', 'dom', 'functions__throttle'], function(provide, BEMDOM, $, dom, throttle) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;

				this._screenSmall = false;
				this._link = this.elem('icon');
				this._popup = this.findBlockInside('popup').setAnchor(this.elem('icon'));

                this._link.on('click', function(e) {
					e.preventDefault();

                    _this._popup.toggleMod('visible');
                });

				BEMDOM.win.outerWidth() < 800 ?  this.setMod('screen-small', true) : this.delMod('screen-small');

				throttle(this._resizeWin(), 300);
            }
        },

		'screen-small': {
			true: function(){
				setTimeout((function(){
					this._popup.params.directions.splice(0, 0, 'bottom-center');
					this._popup.redraw();
				}).bind(this), 300);
			},

			'': function(){
				setTimeout((function(){
					this._popup.params.directions.splice(0, 1);
					this._popup.redraw();
				}).bind(this), 300);
			}
		}
	},

	_resizeWin: function(e){
		this.bindToWin('resize', function(e){
			BEMDOM.win.outerWidth() < 800 ?  this.setMod('screen-small', true) : this.delMod('screen-small');
		});
	},

	getDefaultParams: function() {

	}
}
));

});
