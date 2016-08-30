block('page').mod('view', 'goods-list').content()(function() {
    return [
        {
            block: 'header'
        },
        {
          block: 'sticky',
          panelMods: { white: true }
        },
        {
            block: 'goods-list',
            mods: { aside: 'left' },
            asideToggleText: 'Фильтр',
            content: [
                {
                    elem: 'aside',
                    content: [
                        {
                            block: 'filter'
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer'
        }
    ];
});
