const Discord = require('discord.js');

var hd = [
    "Орёл",
    "Решка",
    "Ребро"
];

module.exports.run = async(bot, message, args, ops) => {
  if(message.guild.id == ops.bl) return;

  const embed = new Discord.RichEmbed()
  .setColor('FF9900')
  .setTitle('Вам выпало:')
  .setDescription(hd[Math.floor(Math.random() * hd.length)]);
  message.channel.send(embed);
}

module.exports.config = {
    name: "coin",
    aliases: [],
    description: "Монетка"
}
