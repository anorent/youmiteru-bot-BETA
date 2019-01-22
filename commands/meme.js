const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Загрузка...")

    let { body } = await superagent
        .get('https://api-to.get-a.life/meme')
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let mEmbed = new Discord.RichEmbed()
        .setColor(colours.violet)
        .setAuthor('Смешняфка^^', message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Druid^^`, bot.user.displayAvatarURL)

    message.channel.send({ embed: mEmbed })

    msg.delete();
}


module.exports.config = {
    name: "meme",
    aliases: [],
    description: "Отправляет мем^^"
}