block('basket-info')(
    js()(true),

    content()(function(){
        return applyNext();
    }),

    elem('icon')(
        tag()('span')
    ),

    elem('badge')(
        tag()('span')
    ),

    elem('link')(
        tag()('a'),
        attrs()(function() {
            return {
                href: this.ctx.url
            };
        }),

        content()(function() {
            return this.ctx.text;
        })
    ),

    elem('total')(
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
