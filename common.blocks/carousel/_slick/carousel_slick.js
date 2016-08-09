// modules.define('carousel', ['i-bem__dom', 'jquery', 'jquery__slick', 'events__channels', 'page'], function(provide, BEMDOM, $, Slick, channels, Page) {
modules.define('carousel', ['i-bem__dom', 'jquery', 'jquery__slick', 'events__channels'], function(provide, BEMDOM, $, Slick, channels) {

// provide(BEMDOM.decl({ block: this.name, modName: 'slick', modVal: true }, {
provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				this.domElem.slick();

				// slider.on('fotorama:ready', this._onInit.bind(this))
                // .fotorama({
                //     width: '100%',
                //     maxwidth: 500,
                //     maxheight: 500,
                //     allowfullscreen: true,
                //     thumbmargin: 16,
                //     thumbborderwidth: 2,
                //     click: false,
                //     shadows: true,
                //     margin: 0,
				// 	nav: 'thumbs'
                // });
				//
				// channels('onGoodsCard').on('click', function(){
				// 	slider.onResize();
				// });
            }
        }
	}

	// _onInit: function(){
	// 	this.findBlockInside('spin').delMod('visible');
	// 	this.setMod('status', 'ready');
	// }
}));

});
