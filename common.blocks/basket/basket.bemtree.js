block('basket').content()(function() {
    // console.log(this.data.cart);

    data = this.data.cart;
    badge = data.count != 0 ? { elem: 'badge', content: data.count } : null;

    return [
            {
            elem: 'icon',
            url: data.link,
            content: [
                '<svg class="basket__icon_img" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
                badge
            ]
        },
        {
            block: 'popup',
            mods: { theme: 'amb', target: 'anchor', autoclosable: true, tail: true },
            content : 'Содержимое всплывающего окна'
        }
    ]
});
