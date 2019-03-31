const Discord = module.require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    let emb = new Discord.RichEmbed()
        .setDescription('НеЖмых')
        .setColor('#ff8148')
        .addField(`Жмых!`, `**${bot.ping}ms**`)
    message.channel.send(emb);
};
module.exports.config = {
    name: "test",
    aliases: [],
    description: "joji"
};