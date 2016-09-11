block('carousel').mod('slick-syncing', true).def()(function() {
	return typeof this.data.goods.slider == 'object' ? applyNext() : null;
});

block('carousel').mod('slick-syncing', true).content()(function() {
	var items = this.data.goods.slider.map(function(item){
		return {
			elem: 'item',
			content: [
				{
					block: 'image',
					url: item
				}
			]
		};
	});

	return [
		{
			elem: 'for',
			content: items
		},
		{
			elem: 'nav',
			content: items
		}
	];
})
