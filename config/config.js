const NodeCache = require('node-cache')

const config = {
    prefix: '',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config