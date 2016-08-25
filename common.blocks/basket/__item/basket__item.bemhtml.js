block('basket').elem('item')(
    def()(function(){
        // console.log(this.ctx);
        return applyNext();
    }),

    elem('item-img')(
        tag()('a'),
        attrs()(function(){
            return { href: this.ctx.url };
        }),

        content()(function(){
            return {
                block: 'image',
                mods: { lazy: true },
                url: this.ctx.src
            }
        })
    ),

    elem('item-name')(
        tag()('a'),
        attrs()(function(){
            return { href: this.ctx.url };
        })
    ),

    elem('item-price')(
        content()(function(){
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
