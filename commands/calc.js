var math = require("mathjs");
const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
	if(message.guild.id == ops.bl) return;
	try {
		console.log(args);
    const embed = new Discord.RichEmbed()
    .setColor('#f4a442')
		.setTitle('Математика')
    .addField(`Пример: ${args}`, `Решение: ${(math.eval(args))}`);
    message.channel.send(embed)
	} catch(err) {
		if(err) message.channel.send(`**${err.message}**`);
	}
};


module.exports.config = {
	name: "calc",
	description: "test",
  aliases: []
};
