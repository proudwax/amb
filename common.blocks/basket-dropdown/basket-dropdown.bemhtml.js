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
    ),

    elem('item-del')(
        content()(function() {
            return {
                block : 'button',
                mix: { block: 'basket-dropdown', elem: 'button-del' },
                mods : { theme: 'amb', size: 's', type: 'submit' },
                icon: [
                    {
                        block: 'icon',
                        content: '<svg height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
                    }
                ]
            }
        })
    )
)
