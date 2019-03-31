const ms = require('ms');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    var get_message = await message.channel.send("Воруем аватар...");
    let target = message.mentions.users.first() || message.author;

    const embed = new Discord.RichEmbed()
        .setTitle(`Аватар ${target.tag}`)
        .setImage(target.displayAvatarURL)
        .setColor('#42f45c')

    message.channel.send(embed)
}


module.exports.config = {
    name: "avatar",
    description: "Gets the avatar of a mentioned user",
    aliases: []
};