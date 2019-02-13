const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя").catch(console.error);

    const lick = ["https://media.tenor.com/images/afd5031043d3b86f41b02b4c1390b90c/tenor.gif", "https://media.tenor.com/images/8cf186216a3fc420eb707624a6843f4e/tenor.gif", "https://media1.tenor.com/images/33812f6d5a60d7047ce429b04ed6aec1/tenor.gif?itemid=12703940", "https://media.tenor.com/images/1ce96858ae1368c5c6eef23f33594f0a/tenor.gif", "https://media.tenor.com/images/08b8c4ad0bebcc7b69d3b14557b7f049/tenor.gif"];


    const liembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} облизал(-а)  ${user.username} О.О`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(lick[Math.floor(Math.random() * lick.length)]);

    message.channel.send(liembed);
};

module.exports.config = {
    name: "lick",
    aliases: [],
    description: "gkk"
}