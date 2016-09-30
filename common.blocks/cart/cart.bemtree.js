block('cart').content()(function() {
    var data = this.data.cart;

    console.log(data);

    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: data.title
                }
            ]
        },
        {
            elem: 'content',
            content: (data.list ? data.list : data.text)
        }
    ];
});
