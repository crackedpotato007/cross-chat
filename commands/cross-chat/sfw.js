const schema = require('../../models/sfw')
module.exports = {
    name: 'setsfw',
    aliases: ['sfw'],
    time: '20s',
    category: 'Chat',
    usage: '(command name) (on/off)',
    ownerOnly: false,
    run: async(client, message, args) => {
        if(!['on', 'off'].includes(args[0].toLowerCase())) return message.reply('Invalid option')
        if(args[0].toLowerCase() === 'on'){
await schema.findOneAndUpdate({
    Guildid: message.guild.id,
}, {$set: {
    enabled: true
}},{upsert: true})
message.reply('SFW has been turned on')
    }
if(args[0].toLowerCase() === 'off'){
await schema.findOneAndUpdate({
    Guildid: message.guild.id,
}, {$set: {
    enabled: false
}},{upsert: true})
message.reply('SFW has been turned off')
}
    }
}