block('page').content()(function() {
    return [
        {
            block: 'header',
            mods: { theme: 'amb' }
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
