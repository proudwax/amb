modules.define('button', ['i-bem__dom', 'BEMHTML', 'jquery', 'dom'], function(provide, BEMDOM, BEMHTML, $, dom, Button) {

provide(Button.decl({ modName: 'preview', modVal: true }, {
	onSetMod : {
		'js': {
            'inited': function(){
				var _this = this;

				// {
				//     block : 'modal',
				//     mods : { theme : 'islands', autoclosable : true },
				//     content : 'Содержимое модального окна'
				// }

				this.on('click', function(e) {
					this._getJSON(this.params.url);
				});

				// console.log(this.params);
            }
        }
	},

	_getJSON: function(url){
		var _this = this;

		$.ajax({
            url: url,
			type: 'POST',
			data: { preview: true }
		})
		.done(function(content) {
    		_this._modal(content);
			_this.params._modal = true;
  		})
		.fail(function(jqXHR, textStatus) {
		  console.log('Request failed: ' + textStatus);
		});
	},

	_modal: function(content){
		if(this.params._modal == true){
			return;
		}

		BEMDOM.append(this.domElem.parent(), BEMHTML.apply(
			{
				block : 'modal',
				mods : { theme : 'islands', autoclosable : true },
				content : content
			}
		))
		.bem('modal')
		.setMod('visible', true);
	},

	getDefaultParams: function() {
		return { _modal: false };
	}
}
));

});
