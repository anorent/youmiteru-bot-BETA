const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();

    const stare = ["https://media.tenor.com/images/94a9deb125cc4008091bb30796bb17d9/tenor.gif", "https://media.tenor.com/images/5a7590690dcfda817c559012c1b4ea68/tenor.gif", "https://media.tenor.com/images/e606540749855678c81744d28e1803f3/tenor.gif", "https://media.tenor.com/images/14f541d70996f76cef95cd067f9c6eae/tenor.gif", "https://media.tenor.com/images/d8b6a3c2a8f31ba29283a0521426316a/tenor.gif", "https://media.tenor.com/images/be831f8c1dcc59d0cefbcc28dae315cf/tenor.gif"];

    const stembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} на что-то смотрит`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(stare[Math.floor(Math.random() * stare.length)]);

    message.channel.send(stmbed);
};

module.exports.config = {
    name: "stare",
    aliases: [],
    description: "123dokk"
}