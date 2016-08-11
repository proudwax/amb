block('carousel').mod('slick', true).content()(function() {
	return this.data.carousel.map(function(item){
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
						content: item.caption
					}
				) : null
			]
		};
	});
})
