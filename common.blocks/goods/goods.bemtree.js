block('goods').content()(function() {
    var data = this.ctx.properties;

    // console.log(data.properties);

    return [
        {
            elem: 'title',
            url: data.url.full,
            content: data.name
        },
        {
            block: 'goods-lable-discount',
            mix: { block: this.block, elem: 'lable' },
            content: data.price
        },
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
                    elem: 'actions',
                    content: data.cart
                }
            ]
        },
        {
            elem: 'properties',
            content: data.properties
        }
    ];
});
