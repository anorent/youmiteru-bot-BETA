const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();

    const pout = ["https://media.tenor.com/images/a9a1ee151d114920f6914bd507f8b3c5/tenor.gif", "https://media.tenor.com/images/abe8bc8b0b76b8ffe6694fa8b8f48853/tenor.gif", "https://media.tenor.com/images/cac79e257d8b8c6740001b764a7dd4c4/tenor.gif", "https://media.tenor.com/images/46c9b8da42a62778fb37f89513c8af0e/tenor.gif"];

    const poembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} дуется`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(pout[Math.floor(Math.random() * pout.length)]);

    message.channel.send(poembed);
};

module.exports.config = {
    name: "pout",
    aliases: [],
    description: "gkkf"
}