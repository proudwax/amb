block('logo').def()(function() {
  var data = this.data.logo,
      ctx = this.ctx;

  if(data.data){
    console.log(data.data);
  }

  if(data.url){
    ctx.url = data.url;
    ctx.title = data.title;

    return applyNext();
  }
})
