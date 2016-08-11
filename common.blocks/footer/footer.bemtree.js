block('footer').content()(function() {
    return [
        {
            block: 'logo',
            mix: { block: 'footer', elem: 'logo' }
        },
        {
            elem: 'contacts',
            mix: { block: 'group', mods: { col: true } },
            content: [
                {
                    block: 'phone',
                    mix: { block: 'footer', elem: 'phone' },
                    mods: { icon: true }
                },
                {
                    block: 'email',
                    mix: { block: 'footer', elem: 'email' },
                    mods: { icon: true }
                },
                {
                    elem: 'adress',
                    mods: { icon: true }
                }
            ]
        }
    ];
});
