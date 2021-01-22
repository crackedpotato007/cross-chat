const prefix = "c!"
const time = new Map()
const pms = require('pretty-ms')
const ms = require('ms')
module.exports = async(client, message) =>{
    if(message.channel.type === "dm") return
    if(message.author.bot) return
    if(!message.content.toLowerCase().startsWith('c!')) return
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.aliases.get(cmd)
    console.log(cmd)
if(!command) return
    if(command.time){
let timeout = ms(command.time)
if(time.has(message.author.id)){
    if(time.get(message.author.id) > Date.now()){
        return message.reply(`Please wait ${pms(time.get(message.author.id) - Date.now(), { verbose: true })} before reusing the \`${command.name}\` command.`);
    }
}
    else {
        command.run(client, message, args)
        return time.set(message.author.id, Date.now()+ms(command.time))
    }
    }
        command.run(client, message, args)
}
