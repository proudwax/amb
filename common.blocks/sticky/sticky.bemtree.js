block('sticky').content()(function() {
    return [
        {
            block: 'layout',
            content: [
                {
                    elem: 'row',
                    elemMods: { between: true, middle: true },
                    content: [
                        {
                            block: 'nav',
                            mix: { block: 'layout', elem: 'col' }
                        },
                        {
                            block: 'basket-dropdown',
                            mix: { block: 'layout', elem: 'col' }
                        }
                    ]
                }
            ]
        }
    ];
});
