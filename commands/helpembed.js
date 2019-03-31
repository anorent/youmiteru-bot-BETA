const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    const embed = new Discord.RichEmbed()
        .setColor('#f4c842')
        .setTitle('Помощь по команде `embed`')
        .addField('{thumbnail: <URL>}', '**добавление миниатюры**')
        .addField('{title: <текст>}', '**текст заголовка**')
        .addField('{description: <текст>}', '**текст описания**')
        .addField('{color: <код цвета>}', '**задать цвет**')
        .addField('{field: <название поля> | value: <текст поля>}', '**название и значение поля**')
        .addField('{timestamp}', '**временная метка**')
        .addField('{footer: <текст>}', '**нижний текст**')
        .addField('{image: <URL>}', '**картинка**')
        .addField('{author: <текст>}', '**задать автора**')
        .setDescription("Пример использования: `v!embed {title: Embed}{description: Embed desc}{color: ff9900}`")
        .setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)

    message.channel.send(embed)
}

module.exports.config = {
    name: "helpembed",
    aliases: [],
    description: "keklmao"
}