block('button').mod('badge', true)(
    content()(function(){
        return [
            applyNext(),
            (this.ctx.badge == null ? null : {
                elem: 'badge',
                content: this.ctx.badge
            })
        ]
    }),

   elem('badge').tag()('span')
);
