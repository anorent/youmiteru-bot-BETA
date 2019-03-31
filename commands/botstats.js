const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");

module.exports.run = async(client, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const embed = new Discord.RichEmbed()
        .setAuthor("Показатели бота")
        .setColor("#a7f442")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField("⭕ | Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
        .addField("🕑 | Uptime", `${duration}`, true)
        .addField("👥 | Пользователей", `${client.users.size.toLocaleString()}`, true)
        .addField("🌐 | Серверов", `${client.guilds.size.toLocaleString()}`, true)
        .addField("🗨 | Каналов", `${client.channels.size.toLocaleString()}`, true)
        .addField("⚙ | Кол-во команд", `${client.commands.size.toLocaleString()}`, true)
        .addField("💡 | Discord.js", `v${version}`, true)
        .addField("By:", "3ефирка❤#6382 \nСпонсировано: 10 20#0019");

    message.channel.send(embed);
};

module.exports.config = {
    name: "botstats",
    aliases: ["inv", "addme", "support", "stats"],
    description: "Статистика бота"
}