block('header')(
  elem('layout')(
    content()(function() {
      return {
        elem: 'container',
        content: applyNext()
      }
    })
  )
)
