([
    {
        mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
		shouldDeps: [
			{ block: 'spin', mods : {theme : 'amb' } },
			{ block: 'functions', elems: ['throttle'] }
		]
    },
    {
        tech: 'js',
        mustDeps: [
			{ block: 'spin', tech: 'bemhtml' }
        ]
    }
])
