block('page').content()(function() {
    return [
        {
            block: 'header'
        },
        {
          block: 'sticky',
          panelMods: { white: true }
        },
        {
            block: 'carousel',
            mods: { slick: true }
        },
        {
            block: 'goods-list-promo'
        },
        {
            block: 'layout',
            content: [
              {
                elem: 'row',
                content: [
                  {
                    elem: 'col',
                    elemMods: { main: true },
                    content: [
                      {
                        block: 'content'
                      }
                    ]
                  },
                  {
                    elem: 'col',
                    elemMods: { sidebar: true },
                    content: [
                      {
                        block: 'filter'
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
