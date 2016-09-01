block('goods-list-promo').def()(function() {
    return typeof this.data['goods-list'] == 'object' ? applyNext() : null;
})

block('goods-list-promo').content()(function() {
    return this.data['goods-list'].map(function(item){
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
});
