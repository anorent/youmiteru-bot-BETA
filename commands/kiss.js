const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя").catch(console.error);

    const kisses = ["https://cdn.nekos.life/kiss/kiss_011.gif", "https://cdn.nekos.life/kiss/kiss_036.gif", "https://cdn.nekos.life/kiss/kiss_054.gif", "https://cdn.nekos.life/kiss/kiss_132.gif", "https://cdn.nekos.life/kiss/kiss_103.gif"];

    const kembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} поцеловал(-а) ${user.username}^^`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(kisses[Math.floor(Math.random() * kisses.length)]);

    message.channel.send(kembed);
};

module.exports.config = {
    name: "kiss",
    aliases: [],
    description: "оп"
}