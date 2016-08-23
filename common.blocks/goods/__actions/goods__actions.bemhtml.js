block('goods')(
    elem('actions')(
        tag()('form'),
        attrs()(function(){
            data = this.ctx.content;

            return {
                'action': 'http://yazvyazda.ru:3001/' + data.cart_url,
                'method': 'post'
            }
        }),

        content()(function(){
            data = this.ctx.content.inputs;

            inputs = data.map(function(input){
                return {
                    elem: 'input',
                    attrs: { type: 'hidden' },
                    name: input.name,
                    val: input.value
                }
            });

            // console.log(inputs);

            return [
                inputs,
                {
                    block: 'control-group',
                    content: [
                        {
                            block: 'button',
                            mods: { theme: 'amb', size: 'm', text: 'hidden' },
                            text: 'Быстрый просмотр',
                            icon: [
                                {
                                    block: 'icon',
                                    mods: { type: 'preview' }
                                }
                            ]
                        },
                        {
                            block: 'button',
                            mods: { theme: 'amb', size: 'm', view: 'action', type: 'submit' },
                            text: 'Купить',
                            icon: [
                                {
                                    block: 'icon',
                                    mods: { type: 'cart' }
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    ),

    elem('input')(
        tag()('input'),
        attrs()(function(){
            data = this.ctx,
            psrentAttrs = this.ctx.attrs;

            attrs = {
                name: data.name,
                value: data.val
            }

            Object.keys(psrentAttrs).map(function(key){
                attrs[key] = psrentAttrs[key];
            })

            return attrs;
        })
    )
)
