const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();

    const sleepy = ["https://media.tenor.com/images/33272e71d1f4b4cbb4605490ea7fa136/tenor.gif", "https://media.tenor.com/images/3fdbe1faa03c5cdffc0b9c51899136f0/tenor.gif", "https://media.tenor.com/images/87c1214eb60e46e1ec78520c6c7cd415/tenor.gif", "https://media.tenor.com/images/8b3ac1d9fcbac3701957d1826043fedc/tenor.gif"];

    const slembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} спит`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(sleepy[Math.floor(Math.random() * sleepy.length)]);

    message.channel.send(slembed);
};

module.exports.config = {
    name: "sleepy",
    aliases: [],
    description: "fgkkf"
}