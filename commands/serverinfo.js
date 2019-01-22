const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async(bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setTitle("Информация о сервере")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} информация`, message.guild.iconURL)
        .addField("**Название сервера:**", `${message.guild.name}`, true)
        .addField("**GOD:**", `${message.guild.owner}`, true)
        .addField("**Число участников:**", `${message.guild.memberCount}`, true)
        .addField("**Количество ролей:**", `${message.guild.roles.size}`, true)
        .setFooter(`Витуся^^ | Зефирка♥#6666`, bot.user.displayAvatarURL);
    message.channel.send({ embed: sEmbed });
}


module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdesc"],
    description: "Отправляет информацию о сервере"
}