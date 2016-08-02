block('nav')(
  tag()('ul'),

  elem('item')(
    tag()('li'),
    content()(function(){
      console.log(this.ctx);
      return {
        elem: 'link',
        elemMods: { current: this.ctx.current },
        url: this.ctx.url,
        content: applyNext()
      }
    })
  ),

  elem('link')(
    tag()('a'),
    attrs()(function(){
      return { href: this.ctx.url }
    })
  )
)
