const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
  if(message.guild.id == ops.bl) return;
  const dick = [" ","8=D", "8D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8============D"];
  
  const embed = new Discord.RichEmbed()
  .setColor('#b3f442')
  .setTitle(`${message.author.username}'s dick`)
  .setDescription(dick[Math.floor(Math.random() * dick.length)])
  message.channel.send(embed)
}

module.exports.config = {
name: "chlen",
aliases: [],
description: "kekwut"
}
