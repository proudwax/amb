block('properties').content()(function() {
    var data = this.data.goods.properties;

    return [
        {
            elem: 'title',
            content: 'Краткие характеристики'
        },
        Object.keys(data).map(function(key) {
            return [
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'key',
                            content: key
                        },
                        {
                            elem: 'value',
                            content: data[key]
                        }
                    ]
                }
            ];
        })
    ];
});
