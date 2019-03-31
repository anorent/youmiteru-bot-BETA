const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    let msg = await message.channel.send("Загрузка...")

    if (!message.channel.nsfw) return message.channel.send("Тут низя такое смотреть! Перейдите в NSFW канал");

    let { body } = await superagent
        .get('https://nekos.life/api/v2/img/anal')
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let embed = new Discord.RichEmbed()
        .setColor('FF9900')
        .setAuthor('Анальчик', message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)

    message.channel.send({ embed: embed })

    msg.delete();
}


module.exports.config = {
    name: "anal",
    aliases: [],
    description: "anal"
}