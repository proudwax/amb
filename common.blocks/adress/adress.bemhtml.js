block('adress')(
  def()(function(){
    return applyNext({
      _ctx: this.ctx
    });
  }),

  content()(function(){
      return {
          elem: 'text',
          content: this._ctx.adress.text
      }
  }),

  mod('icon', true)(
      content()(function() {
          return [
              {
                  elem: 'icon'
              },
              {
                  elem: 'text',
                  content: this._ctx.adress.text
              }
          ]
      }),

      elem('icon')(
          tag()('span'),
          content()('<svg class="adress__icon_img" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')
      )
  ),

  elem('text')(
      tag()('a'),
      attrs()(function(){
          return { href: this._ctx.adress.url }
      })
  )

)
