const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author

    let uEmbed = new Discord.RichEmbed()
        .setColor('#af03f9')
        .setTitle("Информация о пользователе")
        .setThumbnail(user.displayAvatarURL)
        .setAuthor(`${user.username} информация`, user.displayAvatarURL)
        .addField("🌐 | **Имя пользователя:**", `${user.username}`)
        .addField("🔑 | **Тэг:**", `${user.discriminator}`)
        .addField("💡 | **Статус:**", `${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`)
        .addField("🎮 | **Играет в:**", ` ${(message.author.presence.game && message.author.presence.game && message.author.presence.game.name) || 'Не играет на данный момент'}`)
        .addField("🆔 | **ID:**", `${user.id}`)
        .addField("📅 | **Аккаунт создан:**", `${message.author.createdAt}`)
        .setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)
    message.channel.send({ embed: uEmbed });
}

module.exports.config = {
    name: "userinfo",
    aliases: ["ui"],
    description: "Отправляет информацию о пользователе"
}