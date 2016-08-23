block('goods')(
    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        }
    }),

    elem('image')(
        content()(function(){
            return {
                elem: 'link-img',
                attrs: { href: this.ctx.url },
                content: [
                    {
                        block: 'image',
                        mods: { lazy: true },
                        url: this.ctx.src
                    }
                ]
            }
        })
    ),

    elem('title')(
        tag()('h2'),

        content()(function(){
            return {
                elem: 'link',
                attrs: { href: this.ctx.url },
                content: applyNext()
            }
        })
    ),

    elem('link')(
        tag()('a')
    ),

    elem('link-img')(
        tag()('a')
    ),

    elem('lable')(
        tag()('span'),

        content()(function(){
            data = this.ctx.content;

            return 'до -' + Math.ceil((data.current - data.min) / data.current * 100) + '%';
        })
    ),

    elem('price')(
        content()(function(){
            data = this.ctx.content;

            if(data.min){
                return [
                    {
                        elem: 'price-current',
                        content: [
                            data.min,
                            {
                                block: 'rub',
                                mods: { size: 'small' }
                            }
                        ]
                    },
                    {
                        elem: 'price-old',
                        content: [
                            data.current,
                            {
                                block: 'rub',
                                mods: { size: 'small' }
                            }
                        ]
                    }
                ]
            }else{
                return [
                    {
                        elem: 'price-current',
                        content: [
                            data.current,
                            {
                                block: 'rub',
                                mods: { size: 'small' }
                            }
                        ]
                    }
                ]
            }
        })
    ),

    elem('properties')(
        content()(function(){
            return [
                {
                    elem: 'properties-list',
                    content: applyNext()
                }
            ];
        })
    ),

    elem('properties-list')(
        tag()('ul'),

        content()(function(){
            data = this.ctx.content;

            return Object.keys(data).map(function(key){
                return [
                    {
                        elem: 'properties-list-item',
                        content: key + ': ' + data[key]
                    }
                ]
            });
        })
    ),

    elem('properties-list-item')(
        tag()('li')
    )
)
