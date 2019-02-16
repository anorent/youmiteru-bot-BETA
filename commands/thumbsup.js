const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();

    const likes = ["https://media.tenor.com/images/b7bac9f3e6038e079bb68be4f2f70ae7/tenor.gif", "https://media.tenor.com/images/04fff2ee7d519366821348f62067c458/tenor.gif", "https://media.tenor.com/images/21e860a38b825d62e88c9195e6cc650c/tenor.gif", "https://media.tenor.com/images/9f32405f19cae1f51a3ae423e69a2fb9/tenor.gif", "https://media1.tenor.com/images/ecaf6a1859d55a75263797f3c4b5eecc/tenor.gif?itemid=13238379"];

    const lsembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} оценивает это`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(likes[Math.floor(Math.random() * likes.length)]);

    message.channel.send(lsembed);
};

module.exports.config = {
    name: "thumbsup",
    aliases: [],
    description: "dokk"
}