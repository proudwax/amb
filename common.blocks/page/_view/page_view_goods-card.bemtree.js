block('page').mod('view', 'goods-card').content()(function() {
    return [
        {
            block: 'header'
        },
        {
          block: 'sticky',
          panelMods: { white: true }
        },
        {
            block: 'goods-card'
        },
        {
            block: 'footer'
        }
    ];
});
