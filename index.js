const { Client } = require('messenger-api.js')
const client = new Client({ online: true })
const fs = require('fs')

client.on('ready', bot => {
    for (const file of fs.readdirSync('./handlers')) {
        if (!file.endsWith('.js')) continue
        require(`./handlers/${file}`)(bot)
    }

    console.log(`${bot.user.username} đã online.`)
})

client.login(require('./config/fbstate.json'), true)