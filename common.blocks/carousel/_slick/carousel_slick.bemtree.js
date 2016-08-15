block('carousel').mod('slick', true).content()(function() {
	return typeof this.data.carousel == 'object' ? this.data.carousel.map(function(item){
		return {
			elem: 'item',
			content: [
				{
					block: 'image',
					url: item.img
				},
				(item.caption) ? (
					{
						elem: 'caption',
						elemMods: { directions: (item.position) ? (item.position) : 'top-left' },
						content: item.caption
					}
				) : null
			]
		};
	}) : null;
})
