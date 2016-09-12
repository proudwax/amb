block('price')(
    content()(function(){
        data = this.ctx.content;

        //console.log(data);

        if(Number(data.current) != Number(data.original)){
            return [
                {
                    elem: 'current',
                    content: data.current
                },
                {
                    elem: 'old',
                    content: data.original
                }
            ]
        }else{
            return [
                data.current,
                {
                    block: 'rub',
                    mods: { size: 'small' }
                }
            ]
        }
    }),

    elem('current')(
        content()(function() {
            return [
                applyNext(),
                {
                    block: 'rub',
                    mods: { size: 'small' }
                }
            ]
        })
    ),

    elem('old')(
        content()(function() {
            return [
                applyNext(),
                {
                    block: 'rub',
                    mods: { size: 'small' }
                }
            ]
        })
    )
)
