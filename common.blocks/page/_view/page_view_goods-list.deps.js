({
    shouldDeps: [
        {
            mods: { view: ['404', 'goods-list'], theme: 'amb' }
        },
        'header',
        { block: 'carousel', mods: { slick: true } },
        { block: 'goods-list', mods: { aside: 'left' } },
        'sticky',
        'footer'
    ]
})
