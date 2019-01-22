const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("Загрузка...")

    let { body } = await superagent
        .get('http://aws.random.cat/meow')
        //console.Log(body.file)
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let cEmbed = new Discord.RichEmbed()
        .setColor(colours.violet)
        .setAuthor('Кисяка^^', message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`Витуся^^`, bot.user.displayAvatarURL)

    message.channel.send({ embed: cEmbed })

    msg.delete();
}


module.exports.config = {
    name: "cat",
    aliases: [],
    description: "Отправляет картинки с котиками^^"
}