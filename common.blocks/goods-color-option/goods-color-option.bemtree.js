block('goods-color-option').content()(function() {
    var data = this.ctx.content;

    return [
        {
            elem: 'title',
            content: 'Цвет'
        },
        {
            elem: 'list',
            content: [
                data.map(function(item) {
                    return [
                        {
                            elem: 'item',
                            elemMods: { active: item.current },
                            content: [
                                {
                                    elem: 'link',
                                    url: item.url,
                                    title: 'Цвет: ' + item.text,
                                    content: [
                                        {
                                            block: 'image',
                                            mods: { color: item.text_eng },
                                            alt: item.text,
                                            content: '<svg width="100%" height="100%" viewBox="0 0 120 120" version="1.1"  xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>'
                                        }
                                    ]
                                }
                            ]
                        }
                    ];
                })
            ]
        }
    ];
});
