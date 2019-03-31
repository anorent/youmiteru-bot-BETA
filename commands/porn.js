const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args, ops) => {
  if(message.guild.id == ops.bl) return;
  if(!message.channel.nsfw) {return message.channel.send(`Тут низя такое смотреть! Перейдите в NSFW канал `)}
  else{
  randomPuppy('porn')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Порнушка`)
                .setTimestamp()
                .setFooter(`For ${message.author.tag}`)
                .setImage(url)
                .setColor('RANDOM')
    return message.channel.send({ embed });
            })
  }
}
module.exports.config = {
	name: "porn",
  aliases: [],
  description: "porn"
}
