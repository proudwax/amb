block('goods-color-option')(
    elem('title')(
        tag()('h3')
    ),

    elem('list')(
        tag()('ul')
    ),

    elem('item')(
        tag()('li')
    ),

    elem('link')(
        tag()('a'),
        attrs()(function() {
            return {
                href: this.ctx.url,
                title: this.ctx.title
            }
        })
    )
)
