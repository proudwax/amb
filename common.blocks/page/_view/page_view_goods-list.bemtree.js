block('page').mod('view', 'goods-list').content()(function() {
    return [
        {
            block: 'header'
        },
        {
          block: 'sticky',
          panelMods: { white: true },
          content: [
            {
              block: 'nav',
              mix: { block: 'layout' },
            }
          ]
        },
        {
          block: 'carousel',
          mods: { slick: true }
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
