block('nav')(
  content()(function(){
    var data = this.data.menu,
        ctx = this.ctx;

    function getItemNav(items){
      return data.map(function(item){
        return {
          elem: 'item',
          elemMods: { current: item.current },
          current: item.current,
          url: item.url,
          content: item.name
        }
      });
    }

    return getItemNav(data);
  })
)
