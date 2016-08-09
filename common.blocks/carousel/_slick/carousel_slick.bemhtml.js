block('carousel').mod('slick', true)(
    js()(true),

    elem('item')(
    	tag()('a'),

    	attrs()(function(){
    		return { href: this.ctx.bg }
    	})
    )
)
