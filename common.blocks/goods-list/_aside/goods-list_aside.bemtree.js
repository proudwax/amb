block('goods-list').mod('aside', 'left').content()(function() {

    var goods_item = typeof this.data['goods-list'] == 'object' ? this.data['goods-list'].map(function(item){
        return {
            elem: 'item',
            content: [
                {
                    block: 'goods',
                    properties: item
                }
            ]
        };
    }) : ({ elem: 'empty', content: 'Товар не найден. Попробуйте изменить параметры подбора' });

    return [
        {
            elem: 'panel',
            content: [
                {
                    elem: 'show-styles'
                }
            ]
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
