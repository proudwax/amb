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
                  elem: 'row',
                  content: [
                    {
                      elem: 'col',
                      elemMods: { sidebar: true },
                      content: [
                        {
                          block: 'filter'
                        }
                      ]
                    },
                    {
                      elem: 'col',
                      elemMods: { main: true },
                      content: [
                        {
                          block: 'goods-list',
                          mods: { main: true }
                        }
                      ]
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
