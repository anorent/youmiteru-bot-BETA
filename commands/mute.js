const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async(bot, message, args) => {
    //check if the command caller has permission to use the command
    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("У вас нет прав для доступа к этой команде");

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("У меня нет права добавлять роли :<");

    //define the person and mute
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!mutee) return message.channel.send("Пожалуйста,укажите пользователя");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Причина не указана"

    //define mute role and if the mute role doesn't exist create one
    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "ff0000",
                permissions: []
            })
            message.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADDREACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch (e) {
            console.log(e.stack);
        }
    }

    //add role to the mentioned user and also send the user a dm explaing where and why they were muted

    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Здравствуйте, ${mutee.user.username},вы были замьючены в ${message.guild.name} за:   ${reason}`)
        message.channel.send(`${mutee.user.username} был замьючен!`)
    })

    //send an embed to the modlogs channel

    let embed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Модерация:", "mute")
        .addField("Пользователь:", mutee.user.username)
        .addField("Модератор:", message.author.username)
        .addField("Прчина:", reason)
        .addField("Дата:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)
}



module.exports.config = {
    name: "mute",
    description: "Запрещает человеку отправлять сообщения",
    usage: "v!mute <@user> <reason>",
    acessableby: "Members",
    aliases: ["m"]
}