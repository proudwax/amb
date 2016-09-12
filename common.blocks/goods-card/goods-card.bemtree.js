block('goods-card').content()(function() {
    var data = this.data.goods;

    // console.log(data.properties);

    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: data.name
                }
            ]
        },
        {
            elem: 'description',
            content: [
                {
                    elem: 'buy',
                    content: [
                        {
                            elem: 'price',
                            content: [
                                {
                                    block: 'price',
                                    content:  data.price
                                }
                            ]
                        },
                        {
                            elem: 'actions',
                            content: [
                                {
                                    block: 'actions',
                                    content: data.cart
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'color',
                    content: data.color
                },
                {
                    elem: 'properties',
                    content: [
                        {
                            block: 'properties'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'carousel',
            content: [
                {
                    block: 'carousel',
                    mods: { 'slick-syncing': true }
                }
            ]
        },
        {
            elem: 'information',
            content: data.details
        }
    ];
});
