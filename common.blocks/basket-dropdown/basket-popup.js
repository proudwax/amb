modules.define('basket', ['i-bem__dom', 'jquery', 'dom', 'functions__throttle'], function(provide, BEMDOM, $, dom, throttle) {

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;

				this._link = this.findBlockInside('button');
				this._popup = this.findBlockInside('popup').setAnchor(this._link);

				this._link.bindTo('pointerenter', function(e) {
					clearTimeout(_this._timeOut);
					_this._popup.setMod('visible');
				});

				this._popup.bindTo('pointerenter', function(e) {
					clearTimeout(_this._timeOut);
					_this._popup.setMod('visible');
				});

				this._link.bindTo('pointerleave', function(e) {
					_this._timeOut = setTimeout(function(){_this._popup.delMod('visible');}, 300);
				});

				this._popup.bindTo('pointerleave', function(e) {
					_this._timeOut = setTimeout(function(){_this._popup.delMod('visible');}, 300);
				});


				BEMDOM.win.outerWidth() < 800 ?  this.setMod('screen-small', true) : this.delMod('screen-small');

				throttle(this._resizeWin(), 300);
            }
        },

		// Так как в css используется transition: all 0.3s ease 0s; нужно браузеру дать возможность всё преобразовать, а потом только перерисовывать popup
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
