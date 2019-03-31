const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    let msg = await message.channel.send("Загрузка...")

    if (!message.channel.nsfw) return message.channel.send("Тут низя такое смотреть! Перейдите в NSFW канал");

    let { body } = await superagent
        .get('https://nekos.life/api/v2/img/hentai', `https://nekos.life/api/v2/img/Random_hentai_gi`)
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let hEmbed = new Discord.RichEmbed()
        .setColor(colours.violet)
        .setAuthor('Хентайчик♥', message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)

    message.channel.send({ embed: hEmbed })

    msg.delete();
}


module.exports.config = {
    name: "hentai",
    aliases: [],
    description: "Отправляет хентай♥"
}