const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Загрузка...")

    let { body } = await superagent
        .get("https://nekos.life/")
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let nEmbed = new Discord.RichEmbed()
        .setColor(colours.violet)
        .setAuthor('Некууська♥', message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`Витуся^^ | Зефирка♥#6382`, bot.user.displayAvatarURL)

    message.channel.send({ embed: nEmbed })

    msg.delete();
}


module.exports.config = {
    name: "neko",
    aliases: [],
    description: "Отправляет картинку с неко♥"
}