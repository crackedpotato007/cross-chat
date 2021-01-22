const schema = require('../../models/scc')
module.exports = {
    name: 'setcrosschat',
    aliases: ['scc'],
    time: '20s',
    category: 'Chat',
    usage: '(command name)',
    ownerOnly: false,
    run: async(client, message, args) => {
        console.log(args)
await schema.findOneAndUpdate({
    Guildid: message.guild.id,
}, {$set: {
    Channelid: message.channel.id
}},{upsert: true})
message.reply('This channel has been set as the cross chat channel')
message.channel.setRateLimitPerUser(5)
    }
}