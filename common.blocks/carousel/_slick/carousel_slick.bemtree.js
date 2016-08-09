block('carousel').mod('slick', true).content()(function() {

	var data = this.data.carousel,
        ctx = this.ctx;

	var carousel = data.map(function(item){
		return {
			elem: 'item',
			content: [
				{
				    block: 'image',
				    url: item.img
				}
			]
		}
	});

	return carousel;
})
