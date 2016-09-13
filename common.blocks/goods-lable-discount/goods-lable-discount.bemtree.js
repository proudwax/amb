block('goods-lable-discount').def()(function() {
    var data = this.ctx.content;

    return data.current < data.original ? applyNext() : null;
});

block('goods-lable-discount').content()(function() {
    var data = this.ctx.content;

    return 'до -' + Math.ceil((Number(data.original) - Number(data.current)) / Number(data.original) * 100) + '%';
});
