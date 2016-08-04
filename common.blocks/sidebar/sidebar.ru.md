# sidebar

Используется для создания выезжающего бокового блока.

#### Связь

Определяет порядок получения фокуса при переходе между контролами с помощью клавиши `Tab`.

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
