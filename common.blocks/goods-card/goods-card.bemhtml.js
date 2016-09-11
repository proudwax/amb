block('goods-card')(
    js()(true),

    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        }
    }),

    elem('title')(
        tag()('h2')
    ),

    elem('properties-row')(
        tag()('dl')
    ),

    elem('properties-key')(
        tag()('dt'),

        content()(function() {
            return [
                {
                    elem: 'properties-name',
                    content: applyNext()
                }
            ]
        })
    ),

    elem('properties-value')(
        tag()('dd')
    ),

    elem('properties-name')(
        tag()('span')
    )
)
