block('page').content()(function() {
    return [
        {
            block: 'header',
            mods: { theme: 'amb' }
        },
        {
            block: 'filter'
        },
        {
            block: 'content'
        },
        {
            block: 'footer'
        }
    ];
});
