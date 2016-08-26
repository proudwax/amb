({
    mustDeps: [
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: [
        { elems: ['item'] },
        { block: 'popup', mods: { theme: 'amb', tail: true } },
        { block: 'functions', elems: ['throttle'] },
        { block : 'button', mods: { theme: 'amb', type: 'link' } }
    ]
})
