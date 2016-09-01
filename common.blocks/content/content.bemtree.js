block('content').def()(function() {
	return typeof this.data.content == 'object' ?  applyNext() : null;
});

block('content').content()(function() {
	return this.data.content.map(function(item){
		return [
			{
	          elem: 'container',
	          content: item
	        }
		]
	})
});
