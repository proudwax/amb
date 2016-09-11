block('carousel').mod('slick-syncing', true)(
    js()(true),

    content()(function(){
        return [
            {
                elem: 'content',
                elemMods: { hidden: true },
                content: applyNext()
            },
            {
                elem: 'spin',
                content: [
                    {
                        block: 'spin',
                        mods: { theme: 'amb', size : 'l', visible : true }
                    }
                ]
            }
        ]
    }),

    elem('item')(
    	tag()('a'),

    	attrs()(function(){
    		return { href: this.ctx.bg }
    	})
    )
)
