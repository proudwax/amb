block('actions')(
    js()(true),

    tag()('form'),
    attrs()(function(){
        data = this.ctx.content;

        return {
            'action': data.cart_url,
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

        return [
            inputs,
            {
                block: 'button',
                mods: { theme: 'amb', size: 'xl', view: 'action', type: 'submit' },
                text: 'Купить',
                icon: [
                    {
                        block: 'icon',
                        mods: { type: 'cart' }
                    }
                ]
            }
        ]
    }),

    elem('input')(
        tag()('input'),
        attrs()(function(){
            data = this.ctx,
            parentAttrs = this.ctx.attrs;

            attrs = {
                name: data.name,
                value: data.val
            }

            Object.keys(parentAttrs).map(function(key){
                attrs[key] = parentAttrs[key];
            })

            return attrs;
        })
    )
)
