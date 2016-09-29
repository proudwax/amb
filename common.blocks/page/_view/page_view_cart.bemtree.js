block('page').mod('view', 'cart').content()(function() {
    return [
        {
            block: 'header'
        },
        {
          block: 'sticky',
          panelMods: { white: true }
        },
        {
            block: 'cart'
        },
        {
            block: 'footer'
        }
    ];
});
