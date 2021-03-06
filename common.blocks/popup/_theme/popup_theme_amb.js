modules.define('popup', ['objects'], function(provide, objects, Popup) {

provide(Popup.decl({ modName : 'theme', modVal : 'amb' }, {
    getDefaultParams : function() {
        return objects.extend(
            this.__base(),
            {
                mainOffset : 5,
                viewportOffset : 10
            });
    }
}));

});
