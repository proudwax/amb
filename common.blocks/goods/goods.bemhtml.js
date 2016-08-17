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

    elem('button')(
        content()(function(){
            return {
                block: 'button',
                mods: { theme: 'islands' },
                text: 'Купить'
            }
        })
    )
)
