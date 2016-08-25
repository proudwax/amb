block('basket')(
    js()(true),

    content()(function(){
      return applyNext();
    }),

    elem('badge')(
      tag()('span')
    ),

    elem('icon')(
      tag()('a'),
      attrs()(function(){
          return {
              href: this.ctx.url
          }
      })
  )
)
