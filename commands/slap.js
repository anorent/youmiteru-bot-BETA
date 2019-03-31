const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите кого вы хотите стукнуть").catch(console.error);

    const slaps = ["https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif", "https://media.tenor.com/images/c67feb24f4c392aeb5140567933a7385/tenor.gif", "https://media.tenor.com/images/108fc8932afb40ef9a28a367ae4277b6/tenor.gif", "https://media.tenor.com/images/091e0502e5fda1201ee76f5f26eea195/tenor.gif", "https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif", "https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif"];

    const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} ударил(-а) ${user.username}!`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(slaps[Math.floor(Math.random() * slaps.length)]);

    message.channel.send(embed);
};

module.exports.config = {
    name: "slap",
    aliases: [],
    description: "Подщёчина"
}