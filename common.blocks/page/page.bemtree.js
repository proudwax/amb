block('page').content()(function() {
    return [
        {
            block: 'header',
            mods: { theme: 'amb' }
        },
        {
          block: 'sticky',
          content: [
            {
              block: 'nav'
            }
          ]
        },
        {
            block: 'layout',
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
        },
        {
            block: 'footer'
        }
    ];
});
