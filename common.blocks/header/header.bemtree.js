block('header').content()(function() {
    return [
      {
        elem: 'layout',
        elemMods: { dark: true },
        content: [
          {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' }
          },
          {
            block: 'contacts',
            mix: { block: 'header', elem: 'contacts' },
            mods: { light: true },
            content:[
              {
                elem: 'phone'
              }
            ]
          },
          {
            block: 'basket',
            mix: { block: 'header', elem: 'basket' }
          }
        ]
      },
      {
        block: 'sticky',
        content: [
          {
            block: 'header',
            elem: 'layout',
            elemMods: { light: true },
            content: [
              {
                block: 'nav',
                mix: { block: 'header', elem: 'nav' }
              }
            ]
          }
        ]
      }
    ];
});
