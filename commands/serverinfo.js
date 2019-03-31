const Discord = require("discord.js")

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return message.channel.send('Этот сервер находится в чёрном списке, поэтому бот не будет выполнять команды. Причину вы можете узнать у **3ефирка❤#6382**')
    const verificationLevels = ['Отсутствует', 'Слабый', 'Приличный', 'Серьёзный', 'Дьявольский😈'];
    let sEmbed = new Discord.RichEmbed()
        .setColor('#ff9900')
        .setTitle("Информация о сервере")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} информация`, message.guild.iconURL)
        .addField("**Название сервера:**", `${message.guild.name}`)
        .addField("**Основатель:**", `${message.guild.owner}`)
        .addField("**Число участников:**", `${message.guild.memberCount}`)
        .addField("**Количество ролей:**", `${message.guild.roles.size}`)
        .addField("**Регион сервера:**", `${message.guild.region}`)
        .addField("**Кол-во голосовых каналов:**", `${message.guild.channels.filter(m => m.type === 'voice').size}`)
        .addField("**Кол-во текстовых каналов:**", `${message.guild.channels.filter(m => m.type === 'text').size}`)
        .addField("**Уровень верификации:**", `${verificationLevels[message.guild.verificationLevel]}`)
        .addField("**Сервер создан:**", `${message.guild.createdAt}`)
        .setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)
    message.channel.send({ embed: sEmbed });
}


module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdesc"],
    description: "Отправляет информацию о сервере"
}