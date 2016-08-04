block('sidebar').elem('close')(
	tag()('a'),

	attrs()({ href: '#' }),

	content()(function(){
		return {
			block: 'icon'
		};
	})
)
