const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");

exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const embed = new Discord.RichEmbed()
        .setAuthor("Информация о боте")
        .setColor("#a7f442")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField("Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
        .addField("Обновление стоит", `${duration}`, true)
        .addField("Пользователей", `${client.users.size.toLocaleString()}`, true)
        .addField("Серверов", `${client.guilds.size.toLocaleString()}`, true)
        .addField("Каналов", `${client.channels.size.toLocaleString()}`, true)
        .addField("Команд", `${client.commands.size.toLocaleString()}`, true)
        .addField("Discord.js", `v${version}`, true)
        .addField("Сайт", "а вот его и нету", true)
        .addField("Создатели", "<@325228376149327872> - Guild Owner \n <@378702823136821251> - Кодер \n <@325390946583838720> - кодер ");

    message.channel.send(embed);
};

module.exports.config = {
    name: "botstats",
    aliases: ["inv", "addme", "support", "stats"],
    description: "Статистика бота"
}
