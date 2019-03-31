const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    let userSuggestion = args.slice(0).join(" ");
    let user = message.author


    if (args.length === 0) {
        message.delete();
        return message.reply('v!suggestion <текст>').then(m => m.delete(4000))
    };



    message.delete();
    let suEmbed = new Discord.RichEmbed()
        .setColor("#00000")
        .setAuthor(`${user.tag}`, `${user.avatarURL}`)
        .setTitle('Голосование:')
        .setDescription(userSuggestion)
        .setTimestamp()
    return message.channel.send(suEmbed).then(async msg => {
        await msg.react('👍');
        await msg.react('👎');
    });

};

module.exports.config = {
    name: "suggestion",
    aliases: ["suggestions", "s"],
    description: "Опросик",
    usage: "v!suggestion <идея>"
};