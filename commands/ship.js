const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    let user1 = args[0];
    let user2 = args.slice(1).join(' ');
    if (!user1) return message.channel.send("Вы не указали 1 цель для шипинга")
    if (!user2) return message.channel.send("Вы не указали 2 цель для шипинга")
    var ship = Math.floor(Math.random() * 100) + 1;
    if (ship <= 50) {
        const badmatch = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " и " + user2 + " не выглядят хорошо вместе")
            .setDescription(":broken_heart: " + ship + "% :broken_heart:");
        message.channel.send(badmatch);
    } else if (ship === 100) {
        const perfectmatch = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " и " + user2 + " подходят друг другу")
            .setDescription(":heart: " + ship + "% :heart:");
        message.channel.send(perfectmatch);
    } else {
        const match = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " и " + user2 + " это нечто!")
            .setDescription(":heart: " + ship + "% :heart:");
        message.channel.send(match);
    }
}

module.exports.config = {
    name: "ship",
    aliases: [],
    description: "ship"
}