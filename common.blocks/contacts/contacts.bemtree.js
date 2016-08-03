block('contacts').def()(function() {
  var tel = this.data.tel,
      email = this.data.email,
      adress = this.data.adress,
      ctx = this.ctx;

      ctx.tel = this.data.tel;
      ctx.email = this.data.email;
      ctx.adress = this.data.adress;

    return applyNext();
})
