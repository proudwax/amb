([
    {
        mustDeps: [
            { block : 'i-bem', elems : ['dom'] }
        ],
        shouldDeps: [
            { elems: ['actions'] },
            'image',
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
