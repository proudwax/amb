block('goods-list').content()(function() {
    return this.data['goods-list'].map(function(item){
        return {
            elem: 'item',
            content: [
                {
                    block: 'goods',
                    content: [
                        {
                            elem: 'title',
                            content: item.name
                        },
                        {
                            elem: 'price',
                            content: item.price.current
                        },
                        {
                            elem: 'image',
                            content: item.preview
                        }
                    ]
                }
            ]
        };
    });
});
