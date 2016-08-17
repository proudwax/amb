block('goods-list').content()(function() {
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
