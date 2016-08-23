block('goods').content()(function() {
    var data = this.ctx.properties;

    // console.log(data.properties);

    return [
        {
            elem: 'title',
            url: data.url.full,
            content: data.name
        },
        (data.price.min ? { elem: 'lable', elemMods: { discount: true }, content: data.price } : null),
        {
            elem: 'image',
            url: data.url.full,
            src: data.preview
        },
        {
            elem: 'group',
            content: [
                {
                    elem: 'price',
                    content: data.price
                },
                {
                    elem: 'actions'
                }
            ]
        },
        {
            elem: 'properties',
            content: data.properties
        }
    ];
});
