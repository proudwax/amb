({
    mustDeps: [
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: [
        { elems: ['list'] },
        { block: 'popup', mods: { theme: 'amb', tail: true } },
        { block: 'functions', elems: ['throttle'] },
        { block : 'button', mods: { theme: 'amb', type: 'link' } }
    ]
})
