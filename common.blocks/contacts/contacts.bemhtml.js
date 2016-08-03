block('contacts')(
  def()(function(){
    return applyNext({
      _ctx: this.ctx
    });
  }),

  elem('phone')(
    tag()('a'),

    attrs()(function(){
        return { href: 'tel:' + this._ctx.tel }
    }),

    content()(function(){
      return this._ctx.tel;
    })
  ),

  elem('email')(
    content()(function(){
      return this._ctx.email;
    })
  ),

  elem('adress')(
    content()(function(){
      return this._ctx.adress;
    })
  )
)
