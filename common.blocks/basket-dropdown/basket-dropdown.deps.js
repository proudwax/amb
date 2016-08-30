({
    mustDeps: [
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: [
        { block: 'functions', elems: ['throttle'] },
        { block : 'button', mods: { theme: 'amb', type: 'link', badge: true } },
        'rub'
    ]
})
