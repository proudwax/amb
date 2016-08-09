block('footer')(
    tag()('footer'),

  content()(function () {
    return {
        elem: 'container',
        content: applyNext()
    }
  })
)
