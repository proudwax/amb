modules.define('nav', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
  onSetMod : {
      'js' : {
        'inited' : function() {
            var nav = this,
                toggleBtn = this.elem('toggle'),
                closeListBtn = this.elem('close-list');

            toggleBtn.on('click', function(e){
                e.preventDefault();
                nav.setMod('visible', true);
            });

            closeListBtn.on('click', function(e){
                e.preventDefault();
                nav.delMod('visible');
            });
        }
      }
    }
}));

});
