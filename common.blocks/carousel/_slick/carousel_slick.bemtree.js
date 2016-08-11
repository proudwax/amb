block('carousel').mod('slick', true).content()(function() {

	var data = this.data.carousel,
        ctx = this.ctx;

	var carousel = data.map(function(item){
		var itemSlide = {
				elem: 'item'
			},
			content = new Array();

		content.push({
			block: 'image',
			url: item.img
		});

		if(item.caption != undefined){
			content.push({
				elem: 'caption',
				content: item.caption
			});
		}
		itemSlide.content = content;

		return itemSlide;
	});

	return carousel;
})
