block('sidebar')(
	js()(true),

	content()(function(){
		return [
			{
				elem: 'inner',
				content: [
					{
						elem: 'close'
					},
					applyNext()
				]
			}
		]
	})
)
