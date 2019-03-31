const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();

    const nom = ["https://media.tenor.com/images/9ff9b1a0ec062623cb04085457934b35/tenor.gif", "https://media.tenor.com/images/df37ea5a268795305cb5a25f85366208/tenor.gif", "https://media.tenor.com/images/e41bc45767fa9f93a61c075f538de335/tenor.gif", "https://media.tenor.com/images/405588a5f0df4aeb196187ce0a0751e4/tenor.gif", "https://media.tenor.com/images/af0ed4b1c1716f3ef43d87f9eaef6ab8/tenor.gif", "https://media1.tenor.com/images/c0c0f8bb63f38f0ddf6a736354987050/tenor.gif?itemid=4383037"];

    const nembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} решил(-а) покушать :>`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(nom[Math.floor(Math.random() * nom.length)]);

    message.channel.send(nembed);
};

module.exports.config = {
    name: "nom",
    aliases: [],
    description: "12dokk"
}