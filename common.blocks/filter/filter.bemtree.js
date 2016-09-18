block('filter').def()(function() {
	return typeof this.data.filter == 'object' ? applyNext() : null;
});

block('filter').content()(function() {
    var data = this.data.filter;

    function getFeilds(type, name, array) {
        switch (type) {
            case 'checkbox':
                var checked = [];

                return [
                    {
                        block: 'checkbox-group',
                        mods: { theme : 'amb', size : 'l' },
                        name: name,
                        options: (array.map(function(item) {
                            item.checked === true ? checked.push(item.value) : null;
                            return { val: item.value, text: item.text }
                        })),
                        val: checked
                    }
                ];
                break;
            case 'range':
                return array.map(function(item) {
                    return [
                        {
                            elem: 'lable',
                            content: [
                                (item.text ? {
                                    elem: 'text',
                                    content: item.text
                                } : null),
                                {
                                    elem: 'input',
                                    content: [
                                        {
                                            block: 'input',
                                            mods: { theme: 'amb', size: 'l', width: 'available', type: item.type },
                                            name: item.name,
                                            val: item.value,
                                            placeholder: item.value
                                        },
                                        (item.type != 'hidden' ? {
                                            block: 'rub',
                                            mods: { size: 'small' }
                                        } : null)
                                    ]
                                }
                            ]
                        }
                    ]
                });
                break;
            default:
                console.log('add new type: ' + type + ' in filter.bemtree.js');
        }
    }

    rows =  data.map(function(item) {
        return [
            {
                elem: 'row',
                content: [
                    {
                        elem: 'title',
                        content: item.title
                    },
                    {
                        elem: 'field',
                        content: getFeilds(item.type, item.name, item.fields)
                    }
                ]
            }
        ]
    });

    return [
        rows,
        {
            elem: 'row',
            content: [
                {
                block : 'control-group',
                content : [
                    {
                        block : 'button',
                        mods : { theme : 'amb', size : 'l', view : 'action', type: 'submit' },
                        text : 'Искать'
                    },
                    {
                        block : 'button',
                        mods : { theme : 'amb', size : 'l' },
                        text : 'Сбросить'
                    }
                ]
                }
            ]
        }
    ]

    // return [
    //   {
    //     elem: 'row',
    //     content: [
    //       {
    //         block : 'select',
    //         mods : { mode : 'radio', theme : 'amb', size : 'm', width : 'available' },
    //         name : 'select1',
    //         val : [2, 3],
    //         text : 'Программа конференции',
    //         options : [
    //           { val : 1, text : 'Доклад' },
    //           { val : 2, text : 'Мастер-класс' },
    //           { val : 3, text : 'Круглый стол' }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     elem: 'row',
    //     content: [
    //       {
    //         block : 'select',
    //         mods : { mode : 'radio', theme : 'amb', size : 'm', width : 'available' },
    //         name : 'select1',
    //         val : [2, 3],
    //         text : 'Программа конференции',
    //         options : [
    //           { val : 1, text : 'Доклад' },
    //           { val : 2, text : 'Мастер-класс' },
    //           { val : 3, text : 'Круглый стол' }
    //         ]
    //       }
    //     ]
    //   },
    // ];
});
