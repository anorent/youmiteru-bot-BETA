const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async(bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setTitle("Информация о пользователе")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} информация`, message.author.displayAvatarURL)
        .addField("**Имя пользователя:**", `${message.author.username}`, true)
        .addField("**Тэг:**", `${message.author.discriminator}`, true)
        .addField("**Статус:**", `${message.author.presence.status}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Аккаунт создан:**", `${message.author.createdAt}`, true)
        .setFooter(`Druid^^`, bot.user.displayAvatarURL);
    message.channel.send({ embed: uEmbed });
}


module.exports.config = {
    name: "userinfo",
    aliases: ["ui"],
    description: "Отправляет информацию о пользователе"
}
