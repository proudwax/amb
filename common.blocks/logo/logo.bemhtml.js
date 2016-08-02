block('logo')(
  tag()('a'),

  attrs()({
    href: '/'
  }),

  content()(function(){
    return {
      block: 'image',
      url: this.ctx.url,
      title: this.ctx.title
    }
  })
)
