([
    {
        mustDeps: [
            { block : 'i-bem', elems : ['dom'] }
        ],
        shouldDeps: [
            { elems: ['actions'] },
            { block: 'list', mods: { 'goods-properties': true } },
            'image',
            'goods-lable-discount',
            'rub'
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            { block: 'popup', mods: { theme: 'islands' }, tech: 'bemhtml' }
        ]
    }
])
