
module.exports = {
    name: 'help',
    aliases: ['h'],
    time: '20s',
    category: 'General',
    usage: '(command name)',
    ownerOnly: false,
run: (client, message, args) => {

    var i;
    const commandsembed = {
        color: 0x00ffff,
        title: `Bot Commands!`,
        description: `Here is the list of all of my commands!`,
        fields: []
    }
    const cmds = client.commands.map(f => {
        return {
            name: f.name,
            aliases: f.aliases,
            usage: f.usage,
            time: f.time,
            category: f.category,
            config: f.ownerOnly
        }
    });

    for (i = 0; i < cmds.length; i++) {
        commandsembed.fields.push({
            name: cmds[i].name,
            value: [
                `Category: \`${cmds[i].category}\``,
                `Usage: \`${cmds[i].usage}\``,
                `Cooldown: \`${cmds[i].time}\``
            ],
            inline: true
        });
    }
    return message.channel.send({ embed: commandsembed });
}
}