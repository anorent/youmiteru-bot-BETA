const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Загрузка...")

    let { body } = await superagent
        .get('https://nekos.life/api/v2/img/fox_girl')
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let fEmbed = new Discord.RichEmbed()
        .setColor(colours.violet)
        .setAuthor("Лисичка^^", message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Витуся^^ | Зефирка♥#6382`, bot.user.displayAvatarURL)

    message.channel.send({ embed: fEmbed })

    msg.delete();
}

module.exports.config = {
    name: "fox",
    aliases: [],
    description: "лисичка"
}