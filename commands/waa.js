const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();

    const cryis = ["https://media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif", "https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314", "https://media.tenor.com/images/315b2b6e191de690b611cbcb95924607/tenor.gif", "https://media1.tenor.com/images/7ef999b077acd6ebef92afc34690097e/tenor.gif?itemid=10893043"];

    const crembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} плачет :<`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(cryis[Math.floor(Math.random() * cryis.length)]);

    message.channel.send(crembed);
};

module.exports.config = {
    name: "waa",
    aliases: [],
    description: "okk"
}