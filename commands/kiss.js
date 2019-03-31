const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя").catch(console.error);

    const kisses = ["https://cdn.discordapp.com/attachments/363711023233892358/363965277052076032/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363964744786509835/kiss.gif","https://cdn.discordapp.com/attachments/363711023233892358/363954346393862144/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363965696599654400/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363970401182679040/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363970459722842112/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363970594082914315/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363970660894244865/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363971018970234880/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/363971024888266762/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364021671109197824/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364021671109197824/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364021714671239169/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364021720652185601/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364021789506142208/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364021794551889920/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364400071816773632/kiss.gif", "https://cdn.discordapp.com/attachments/363711023233892358/364400164783521802/kiss.gif", ""https://cdn.discordapp.com/attachments/363711023233892358/365474360938725387/kiss.gif ,"https://cdn.nekos.life/kiss/kiss_011.gif", "https://cdn.nekos.life/kiss/kiss_036.gif", "https://cdn.nekos.life/kiss/kiss_054.gif", "https://cdn.nekos.life/kiss/kiss_132.gif", "https://cdn.nekos.life/kiss/kiss_103.gif"];

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
