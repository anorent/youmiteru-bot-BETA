const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Загрузка...")

    let { body } = await superagent
        .get('https://dog.ceo/api/breeds/image/random')
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let dEmbed = new Discord.RichEmbed()
        .setColor(colours.green)
        .setAuthor('Я Скинул Догэ^^', message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`Druid^^`, bot.user.displayAvatarURL)

    message.channel.send({ embed: dEmbed })

    msg.delete();
}


module.exports.config = {
    name: "dog",
    aliases: [],
    description: "Отправляют картинки с Cобакэ^^"
}