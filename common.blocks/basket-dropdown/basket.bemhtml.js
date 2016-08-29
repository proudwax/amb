block('basket')(
    js()(true),

    content()(function(){
      return applyNext();
    }),

    elem('badge')(
      tag()('span')
    )
)
