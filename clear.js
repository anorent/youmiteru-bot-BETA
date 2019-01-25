const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {

    //!clear 15
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" У вас недостаточно прав :x:");
    if(!args[0]) return message.channel.send(":warning: Вы забыли указать число");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`✅ Удалил ${args[0]} сообщений.`);
    });
}

module.exports.help = {
  name: "clear"
}  


module.exports.config = {
  name: "Druid",
  Aliases: ["gg"]
  }