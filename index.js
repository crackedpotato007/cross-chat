const djs = require('discord.js');
const Client = new djs.Client()
const config = require('./config.json')
const mongo = require('./mongo')

Client.commands = new djs.Collection()
Client.aliases = new djs.Collection()

Client.on('ready', async() => {
    console.log('Ready')
    require('./handlers/cmd-loader')(Client)
    await mongo().then(console.log('Connected to MongoDB'))
})
Client.on('message', (message) => {
    require('./events/message')(Client, message)
    require('./events/crosschat')(Client, message)
})
Client.login(config.token)