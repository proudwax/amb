block('goods')(
    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        }
    }),

    elem('image')(
        content()(function(){
            return {
                elem: 'link-img',
                attrs: { href: this.ctx.url },
                content: [
                    {
                        block: 'image',
                        mods: { lazy: true },
                        url: this.ctx.src
                    }
                ]
            }
        })
    ),

    elem('title')(
        tag()('h2'),

        content()(function(){
            return {
                elem: 'link',
                attrs: { href: this.ctx.url },
                content: applyNext()
            }
        })
    ),

    elem('link')(
        tag()('a')
    ),

    elem('link-img')(
        tag()('a')
    ),

    elem('price')(
        content()(function(){
            return [
                applyNext(),
                {
                    block: 'rub',
                    mods: { size: 'small' }
                }
            ]
        })
    ),

    elem('actions')(
        content()(function(){
            return {
                block: 'control-group',
                content: [
                    {
                        block: 'button',
                        mods: { theme: 'amb', size: 'm', text: 'hidden' },
                        text: 'Быстрый просмотр',
                        icon: [
                            {
                                block: 'icon',
                                mods: { type: 'preview' }
                            }
                        ]
                    },
                    {
                        block: 'button',
                        mods: { theme: 'amb', size: 'm', view: 'action' },
                        text: 'Купить',
                        icon: [
                            {
                                block: 'icon',
                                mods: { type: 'cart' }
                            }
                        ]
                    }
                ]
            }
        })
    )
)
