block('search').content()(function() {



    return [
      {
        elem: 'row',
        content: [
          {
            block : 'select',
            mods : { mode : 'radio', theme : 'amb', size : 'm', width : 'available' },
            name : 'select1',
            val : [2, 3],
            text : 'Программа конференции',
            options : [
              { val : 1, text : 'Доклад' },
              { val : 2, text : 'Мастер-класс' },
              { val : 3, text : 'Круглый стол' }
            ]
          }
        ]
      },
      {
        elem: 'row',
        content: [
          {
            block : 'select',
            mods : { mode : 'radio', theme : 'amb', size : 'm', width : 'available' },
            name : 'select1',
            val : [2, 3],
            text : 'Программа конференции',
            options : [
              { val : 1, text : 'Доклад' },
              { val : 2, text : 'Мастер-класс' },
              { val : 3, text : 'Круглый стол' }
            ]
          }
        ]
      },
      {
        elem: 'row',
        content: [
          {
              block : 'control-group',
              content : [
                  {
                      block : 'button',
                      mods : { theme : 'amb', size : 'm', view : 'action' },
                      text : 'Искать'
                  },
                  {
                      block : 'button',
                      mods : { theme : 'amb', size : 'm' },
                      text : 'Сбросить'
                  }
              ]
          }
        ]
      }
    ];
});
