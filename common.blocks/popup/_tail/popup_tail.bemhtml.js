block('popup').mod('tail', true)(
	content()(function(){

		return [
			{
				elem: 'tail',
				tag: 'i'
			},
			applyNext(),
		]
	})
);
