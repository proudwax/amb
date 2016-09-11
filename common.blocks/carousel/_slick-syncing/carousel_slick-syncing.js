modules.define('carousel', ['i-bem__dom', 'jquery', 'jquery__slick', 'functions__throttle'], function(provide, BEMDOM, $, Slick, throttle) {

provide(BEMDOM.decl({ block: this.name, modName: 'slick-syncing', modVal: true }, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this;

				this.elem('content')
					.on('init', function(event, slick){
						_this.setMod(_this.elem('spin'), 'hidden', true);
						_this.delMod(_this.elem('content'), 'hidden');
					});
					// .on('reInit', function(event, slick){
					// 	alert('reInit');
					// });

				this.elem('for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					arrows: false,
					asNavFor: _this.elem('nav')
				});

				this.elem('nav').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					vertical: true,
					focusOnSelect: true,
					asNavFor: _this.elem('for')
				});


				throttle(this.bindToWin('resize', function(e){
					_this.elem('for').slick('reinit');
					_this.elem('nav').slick('reinit');
				}), 300);
            }
        }
	}
}));

});



/*
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
