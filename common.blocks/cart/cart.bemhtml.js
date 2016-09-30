block('cart')(
    js()(true),

    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        }
    }),

    elem('title')(
        tag()('h1')
    )
)
