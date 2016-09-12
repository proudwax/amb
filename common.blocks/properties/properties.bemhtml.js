block('properties')(
    elem('title')(
        tag()('h3')
    ),

    elem('row')(
        tag()('dl')
    ),

    elem('key')(
        tag()('dt'),

        content()(function() {
            return [
                {
                    elem: 'name',
                    content: applyNext()
                }
            ]
        })
    ),

    elem('value')(
        tag()('dd')
    ),

    elem('name')(
        tag()('span')
    )
)
