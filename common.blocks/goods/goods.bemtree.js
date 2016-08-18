block('goods').content()(function() {
    var data = this.ctx.properties;

    return [
        {
            elem: 'title',
            url: data.url.full,
            content: data.name
        },
        {
            elem: 'image',
            url: data.url.full,
            src: data.preview
        },
        {
            elem: 'price',
            content: data.price.current
        },
        {
            elem: 'actions'
        }
    ];
});
