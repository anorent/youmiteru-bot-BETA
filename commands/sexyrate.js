const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const sexyrate = Math.floor(Math.random() * 100)
    const embed = new Discord.RichEmbed()
        .addField(":heart_decoration: Рэйтинг сексуальности :heart_decoration: ", "Я оцениваю тебя на " + sexyrate + " из 100 баллов сексуальности")
        .setThumbnail(message.author.displayAvatarURL)
        .setColor('#f44242')
    message.channel.send(embed)
}

module.exports.config = {
    name: "sexyrate",
    aliases: [],
    description: "sex"
}