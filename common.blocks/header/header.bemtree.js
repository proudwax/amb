block('header').content()(function() {
    return [
      {
        block: 'logo',
        mix: { block: 'header', elem: 'logo' }
      },
      {
        block: 'nav',
        mix: { block: 'header', elem: 'nav' }
      },
      'header content'
    ];
});
