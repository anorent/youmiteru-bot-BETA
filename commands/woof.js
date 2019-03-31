const Discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    let { body } = await superagent
        .get('https://nekos.life/api/v2/img/woof')
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let embed = new Discord.RichEmbed()
        .setColor('FF9900')
        .setAuthor("Woof", message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Youmiteru`, bot.user.displayAvatarURL)

    message.channel.send({ embed: embed })

    msg.delete();
}

module.exports.config = {
    name: "woof",
    aliases: [],
    description: "woof"
}