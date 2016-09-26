block('list').mod('goods-properties', true)(
    tag()('ul'),

    content()(function(){
        data = this.ctx.content;

        return Object.keys(data).map(function(key){
            return [
                {
                    elem: 'item',
                    content: key + ': ' + data[key]
                }
            ]
        });
    }),

    elem('item')(
        tag()('li')
    )
)
