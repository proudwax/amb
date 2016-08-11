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
                  block: 'phone',
                  mix: { block: 'header', elem: 'phone' },
                  mods: { icon: true }
              },
              {
                  block: 'basket',
                  mix: { block: 'header', elem: 'basket' }
              }
          ]
      }
    ];
});
