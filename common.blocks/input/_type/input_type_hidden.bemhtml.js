block('input').mod('type', 'hidden')(
    tag()('input'),

    attrs()(function(){
        return {
            'type': 'hidden',
            'name': this.ctx.name,
            'value': this.ctx.val 
        };
    })
);
