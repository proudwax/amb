block('header').content()(function() {
    return [
      {
          elem: 'container',
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
      }
    ];
});
