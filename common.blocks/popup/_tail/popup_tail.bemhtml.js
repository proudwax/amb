block('popup').mod('tail', true)(
	js()(function(){
		var ctx = this.ctx;

		return this.extend(applyNext(), { tailOffset: this.ctx.tailOffset });
	}),

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
