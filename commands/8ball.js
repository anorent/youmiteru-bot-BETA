const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    if (!args[1]) return message.reply("М,а где вопрос?");
    let replies = ["Да", "Нет", "Ну,не знаю", "Сейчас не могу дать точного ответа"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result]);

    message.channel.send(ballEmbed);
}

module.exports.config = {
    name: "8ball",
    aliases: ["8b"],
    description: "Магический шарик"
}