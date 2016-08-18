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
            block: 'layout',
            content: [
                {
                    block: 'goods-list',
                    mix: { block: 'layout', elem: 'row' }
                }
            ]
        },
        {
            block: 'footer'
        }
    ];
});
