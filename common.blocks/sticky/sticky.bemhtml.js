block('sticky')(
	js()(true),
	content()(function() {
		return [
			{
				elem: 'container',
				elemMods: this.ctx.panelMods,
				mix: this.ctx.panelMix,
				cls: this.ctx.panelCls,
				content: applyNext() // это означает вернуть результат текущей моды (в данном случае — content == более правильный способ сделать this.ctx.content, т.к. применятся и предыдущие шаблоны, если они есть)
			},
			{ elem: 'backing' }
		];
	})
)
