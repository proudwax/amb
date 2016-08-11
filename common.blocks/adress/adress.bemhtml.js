block('adress')(
  def()(function(){
    return applyNext({
      _ctx: this.ctx
    });
  }),

  content()(function(){
      return {
          elem: 'text',
          content: this._ctx.adress
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
                  content: this._ctx.adress
              }
          ]
      }),

      elem('icon')(
          tag()('span'),
          content()('<svg class="adress__icon_img" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')
      )
  ),

  elem('text')(
      tag()('a'),
      attrs()(function(){
          return { href: 'mailto:' + this._ctx.adress }
      })
  )

)
