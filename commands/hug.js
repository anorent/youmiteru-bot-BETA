const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя").catch(console.error);

    const hugs = ["https://cdn.nekos.life/hug/hug_009.gif", "https://cdn.nekos.life/hug/hug_006.gif", "https://cdn.nekos.life/hug/hug_059.gif", "https://cdn.nekos.life/hug/hug_086.gif", "https://cdn.nekos.life/hug/hug_054.gif", "https://cdn.nekos.life/hug/hug_002.gif"];

    const hembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} обнял(-а) ${user.username} ^^`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(hugs[Math.floor(Math.random() * hugs.length)]);

    message.channel.send(hembed);
};

module.exports.config = {
    name: "hug",
    aliases: [],
    description: "кп"
}