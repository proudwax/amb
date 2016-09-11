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
                    elem: 'price',
                    content: data.price.current
                },
                {
                    elem: 'properties',
                    content: Object.keys(data.properties).map(function(key) {
                        return [
                            {
                                elem: 'properties-row',
                                content: [
                                    {
                                        elem: 'properties-key',
                                        content: key
                                    },
                                    {
                                        elem: 'properties-value',
                                        content: data.properties[key]
                                    }
                                ]
                            }
                        ];
                    })
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
