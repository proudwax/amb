block('nav')(
    js()(true),
    tag()('nav'),

    content()(function(){
        return [
            {
              elem: 'toggle'
            },
            {
              elem: 'list',
              content: [
                  {
                      elem: 'close-list'
                  },
                  applyNext()
              ]
            }
        ]
    }),

    elem('toggle')(
        tag()('a'),
        attrs()({ href: '#' }),
        content()('<svg class="nav__toggle_img" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>')
    ),

    elem('close-list')(
        tag()('a'),
        attrs()({ href: '#' }),
        content()('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M14 .7l-.7-.7L7 6.3.7 0 0 .7 6.3 7 0 13.3l.7.7L7 7.7l6.3 6.3.7-.7L7.7 7z"/></svg>')
    ),

    elem('list')(
        tag()('ul')
    ),

    elem('item')(
        tag()('li'),
        content()(function(){
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
