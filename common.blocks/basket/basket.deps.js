({
    mustDeps: [
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: [
        { elems: ['item'] },
        { block: 'popup', mods: { theme: 'amb', tail: true } },
        { block: 'functions', elems: ['throttle'] }
    ]
})
