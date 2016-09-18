block('input').mod('type', 'hidden')(
    tag()('input'),

    attrs()(function(){
        return this.extend(applyNext(), {'type': 'hidden'});
    })
);
