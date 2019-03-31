const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    //!clear 15
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" У вас недостаточно прав");
    if (!args[0]) return message.channel.send("Укажите количество сообщений для очистки");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Я очистила чат от ${args[0]} сообщений. Это была нудная работа...`);
    });
}

// module.exports.name = {
//   name: "clear"
// }


module.exports.config = {
    name: "clear",
    aliases: [],
    description: "clear"
}