# sidebar

Используется для создания выезжающего бокового блока.

#### Связь

Связываем <code>link</code> и <code>sidebar</code> через метод <code>setAnchor()</code>, и добавляем модификатор<code>.sidebar_visible</code> при клике.

```js
modules.define('link-sidebar', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('link'),
                    sidebar = this.findBlockInside('sidebar')
                        .setAnchor(link);

                link.on('click', function(e) {
                    e.preventDefault();
                    sidebar.setMod('visible', true);
                });
            }
        }
    }
}));

});
```
