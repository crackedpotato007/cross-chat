module.exports = {
    name: 'report',
    time: '20s',
    aliases: [],
    category: 'Chat',
    usage: '(command name) (message id)',
    ownerOnly: false,
    run: async(client, message, args) => {
        if(!args[0]) return message.reply('Provide a report message id')
        const chan = client.channels.cache.get('801831853329088552')
        message.reply('Reported')
        chan.send(`New report in **${message.guild.id}** by **${message.author.id}** of message **${args[0]}**`)
    }
}