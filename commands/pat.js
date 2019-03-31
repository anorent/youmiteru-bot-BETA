const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя").catch(console.error);

    const pats = ["https://nekos.life/api/v2/img/pat_001.gif", "https://nekos.life/api/v2/img/pat_102.gif", "https://nekos.life/api/v2/img/pat_203.gif", "https://nekos.life/api/v2/img/pat_006.gif", "https://nekos.life/api/v2/img/pat_124.gif"];

    const pembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} погладил(-а) ${user.username}`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(pats[Math.floor(Math.random() * pats.length)]);

    message.channel.send(pembed);
};

module.exports.config = {
    name: "pat",
    aliases: [],
    description: "ип"
}