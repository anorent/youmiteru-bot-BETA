const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У вас нет прав для использования данной команды")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!banMember) return message.channel.send("Пожалуйста,укажите пользователя")

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Причина не указана"

    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У меня нет прав для использования этой команды")

    message.delete()

    banMember.send(`Здравствуйте, ${banMember.user.username} ,вы были забанены на сервере ${message.guild.name}. Причина: ${reason}`).then(() =>
        message.guild.ban(banMember, { days: 1, reason: reason })).catch(err => console.log(err))

    message.channel.send(`**${banMember.user.tag}** был забанен!`)

    let embed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Модерация:", "ban")
        .addField("Пользователь:", banMember.user.username)
        .addField("Модератор:", message.author.username)
        .addField("Прчина:", reason)
        .addField("Дата:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)



}

module.exports.config = {
    name: "ban",
    description: "Блокирует пользователя на сервере",
    usage: "r!ban <@user> <reason>",
    acessableby: "Administrators",
    aliases: ["b"]
}