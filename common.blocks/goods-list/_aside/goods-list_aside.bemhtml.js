block('goods-list').mod('aside', 'left')(
    def()(function(){
        return applyNext({ _asideToggleText: this.ctx.asideToggleText });
    }),

    js()(true),
    
    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        }
    }),

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
  )
)
