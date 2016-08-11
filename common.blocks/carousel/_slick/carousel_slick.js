modules.define('carousel', ['i-bem__dom', 'jquery', 'jquery__slick', 'events__channels'], function(provide, BEMDOM, $, Slick, channels) {

provide(BEMDOM.decl({ block: this.name, modName: 'slick', modVal: true }, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this;

				this.elem('content')
					.on('init', function(event, slick){
						_this.setMod(_this.elem('spin'), 'hidden', true);
						_this.delMod(_this.elem('content'), 'hidden');
					})
					.on('reInit', function(event, slick){
						alert('reInit');
					});

				this.elem('content').slick();
            }
        }
	}
}));

});
