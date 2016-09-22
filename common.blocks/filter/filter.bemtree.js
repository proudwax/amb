block('filter').def()(function() {
	return typeof this.data.filter == 'object' ? applyNext() : null;
});

block('filter').content()(function() {
    var data = this.data.filter;

    function getFeilds(type, name, name_eng, array) {
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
                                        (name_eng == 'Price' && item.type != 'hidden' ? {
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
                        content: getFeilds(item.type, item.name, item['title-eng'], item.fields)
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
					block: 'input',
					mods: { type: 'hidden' },
					name: 'nc_filter_set',
					val: 1
				},
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
                        mods : { theme : 'amb', size : 'l', type: 'submit' },
						name: 'nc_filter_reset',
						val: 1,
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
