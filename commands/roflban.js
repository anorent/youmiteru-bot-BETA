const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У вас нет прав для использования данной команды")

    let rbanMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!rbanMember) return message.channel.send("Пожалуйста,укажите пользователя")

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Причина не указана"

    if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У меня нет прав для использования этой команды")

    message.delete()

        message.guild.kick(rbanMember, { days: 1, reason: reason })


    message.channel.send(`**${rbanMember.user.tag}** был забанен!`)

    let embed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Модерация:", "roflban (kick)")
        .addField("Пользователь:", rbanMember.user.username)
        .addField("Модератор:", message.author.username)
        .addField("Причина:", reason)
        .addField("Дата:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)



}

module.exports.config = {
    name: "rban",
    description: "Блокирует пользователя на сервере",
    usage: "v!ban <@user> <reason>",
    acessableby: "Administrators",
    aliases: ["rb"]
}