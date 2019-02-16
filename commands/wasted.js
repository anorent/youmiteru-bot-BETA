const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();

    const wasted = ["https://media.tenor.com/images/fe89919039e43c4c681bdb46358a502f/tenor.gif", "https://media.tenor.com/images/b713799e73ffe51c0268947e7708c39c/tenor.gif", "https://media.tenor.com/images/e540bc6ed6f12d1cefcfa152e3fbb7fd/tenor.gif", "https://media.tenor.com/images/898753fbf562476b5fb82c6d4281fe13/tenor.gif", "https://media.tenor.com/images/4f39a9b66e4e329869385fc8e69dbe20/tenor.gif", "https://media1.tenor.com/images/d3f0893d296d19b1fb6201a30619206c/tenor.gif?itemid=7256224"];

    const wsembed = new Discord.RichEmbed()
        .setTitle(`WASTED`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(wasted[Math.floor(Math.random() * wasted.length)]);

    message.channel.send(wsembed);
};

module.exports.config = {
    name: "wasted",
    aliases: [],
    description: "1dokk"
}