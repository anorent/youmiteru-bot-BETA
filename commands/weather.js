const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    weather.find({ search: args.join(" "), degreeType: 'C' }, function(err, result) {
        if (err) message.channel.send(err);

        var current = result[0].current;
        var location = result[0].location;

        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Город: ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('#f97503')
            .addField('🌐 | Временная зона:', `UTC${location.timezone}`)
            .addField('🕐 | Тип градусов:', location.degreetype)
            .addField('♨ | Температура:', `${current.temperature} градусов`)
            .addField('Ощущается как:', `${current.feelslike} градусов`)
            .addField('🌬 | Ветер:', current.winddisplay)
            .addField('💧 | Влажность:', `${current.humidity}%`)
            .setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)

        message.channel.send({ embed });
    })
}
module.exports.config = {
    name: "weather",
    aliases: ["wt"],
    description: "Погода"
}