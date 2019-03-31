const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    //check if the cmd caller has perms to use the cmd
    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("У вас нет прав для доступа к этой команде")

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("У меня нет права добавлять роли :<")

    //define the reason and unmute
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!mutee) return message.channel.send("Пожалуйста,укажите пользователя");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Причина не указана"

    //define mute role and if the mute role doesn't exist then send a message
    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if (!muterole) return message.channel.send("Нет Mute-роли для снятия")

    //remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
    mutee.removeRole(muterole.id).then(() => {
        message.delete();
        mutee.send(`Здравствуйте ${mutee.user.username},вы были размьючены на сервере ${message.guild.name}`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username} был размьючен!`)
    })

    //send an embed tp the modlogs channel
    let embed = new Discord.RichEmbed()
        .setColor(colours.green)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Модерация:", "unmute")
        .addField("Пользователь:", mutee.user.username)
        .addField("Модератор:", message.author.username)
        .addField("Причина:", reason)
        .addField("Дата:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)

}


module.exports.config = {
    name: "unmute",
    description: "Возвращает пользователю разрешение на отпрввку сообщений",
    usage: "v!unmute <@user> <reason>",
    accessableby: "Members",
    aliases: ["unm"]
}