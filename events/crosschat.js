const schema = require('../models/scc')
const djs = require('discord.js')
const sfw = require('../models/sfw')
module.exports = async(Client, message) => {
    if(message.author.bot) return
let data = await schema.findOne({Guildid: message.guild.id})
if(!data) return
if(message.channel.id === data.Channelid){
    let results = await schema.find()

    for(result of results){

        if(result.Guildid === message.guild.id) return

        let chan = Client.channels.cache.get(result.Channelid)

        let sf = await sfw.findOne({Guildid: result.Guildid})
        if(!sf) return chan.send('Server setup misses SFW settings run the setsfw command')
        const words = ['bitch', 'fucker', 'asshole', 'motherfucker', 'rape'];

const str = message.content

const found = words.filter((word) => {

  const regex = new RegExp(`\\b${word}\\b`, 'i');

  return regex.test(str);
});
        if(sf.enabled === true && found.length > 0){
            console.log(found)
            console.log(found.length)
            return
        }
        const embed = new djs.MessageEmbed()
        .setAuthor(`${message.author.username} from ${message.guild.name}`)
        .setDescription(`${message.content}`)
        .setColor('RANDOM')

    chan.send(embed)
    }
}
}