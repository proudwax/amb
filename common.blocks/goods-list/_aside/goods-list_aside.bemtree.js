block('goods-list').mod('aside', 'left').content()(function() {
    var goods_item = this.data['goods-list'].map(function(item){
        return {
            elem: 'item',
            content: [
                {
                    block: 'goods',
                    properties: item
                }
            ]
        };
    });

    return [
        {
            elem: 'panel'
        },
        {
            elem: 'aside',
            content: [
                {
                    block: 'filter'
                }
            ]
        },
        {
            elem: 'showcase',
            content: goods_item
        }
    ]
});
