const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Искала,искала и не нашла у вас нужных прав")
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}

module.exports.config = {
    name: "say",
    aliases: [],
    description: "Повторение сообщения"
}