modules.define('sidebar', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, Sidebar) {

provide(Sidebar.decl({

	onSetMod : {
		'js' : {
			'inited' : function() {
				var _this = this;

				this.bindTo(this.elem('close'), 'click', function(e){
					e.preventDefault();

					_this.delMod('visible');
					_this.params._visibled = false;
				})
				.__base.apply(this, arguments); // Доопределяем блок (всё то, что в блоке sidebar.js)
			}
		}
	}
}));
});
