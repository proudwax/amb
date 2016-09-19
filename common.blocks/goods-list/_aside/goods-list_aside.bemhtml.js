block('goods-list').mod('aside', 'left')(
    def()(function(){
        return applyNext({ _asideToggleText: this.ctx.asideToggleText });
    }),

    js()(true),

  elem('panel').content()(function(){
      return [
          {
              elem: 'aside-toggle'
          },
          applyNext()
      ]
  }),

  elem('aside-toggle')(
      tag()('a'),
      attrs()({ href: '#' }),

      content()(function(){
          return [
              {
                  block: 'icon',
                  content: '<svg height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
              },
              this._asideToggleText
          ]
      })
  ),

  elem('aside')(
    content()(function(){
      return [
        {
          elem: 'aside-close'
        },
        applyNext()
      ]
    })
  ),

    elem('aside-close')(
        tag()('a'),
        attrs()({ href: '#' }),

        content()(function(){
            return {
                block: 'icon'
            }
        })
    ),

    elem('show-styles')(
        content()(function(){
            return [
                {
                    block : 'control-group',
                    content : [
                        {
                            block : 'button',
                            mods : { theme : 'amb', size : 'm', view : 'action', style: 'module' },
                            icon: [
                                {
                                    block: 'icon',
                                    content: '<svg height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
                                }
                            ]
                        },
                        {
                            block : 'button',
                            mods : { theme : 'amb', size : 'm', style: 'line' },
                            icon: [
                                {
                                    block: 'icon',
                                    content: '<svg height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    )
)
