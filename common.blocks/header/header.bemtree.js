block('header').content()(function() {
    return [
      {
        elem: 'layout',
        elemMods: { dark: true, flex: true },
        content: [
          {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' }
          },
          {
            block: 'contacts',
            mix: { block: 'header', elem: 'contacts' },
            content:[
              {
                elem: 'phone',
                elemMods: { light: true }
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
