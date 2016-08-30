block('basket-dropdown')(
    // js()(true),

    elem('badge')(
      tag()('span')
    ),

    elem('item-img')(
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

    elem('link-img')(
        tag()('a')
    ),

    elem('item-name')(
        tag()('a'),
        attrs()(function() {
            return { href: this.ctx.url }
        })
    ),

    elem('item-price')(
        content()(function() {
            return [
                applyNext(),
                {
                    block: 'rub',
                    mods: { size: 'small' }
                }
            ]
        })
    )
)
