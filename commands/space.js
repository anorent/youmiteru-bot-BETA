const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args) => {
    // message.delete();

    let user = message.author.username;

    const urls = ['https://media1.tenor.com/images/5d29469715dec4185b4cfe7d43c8829e/tenor.gif?itemid=11712853', 'https://media.tenor.com/images/000e1bb148a9b98d34420cd76421f008/tenor.gif', 'https://media.tenor.com/images/311230239f9f4a1a34cd901606e153ce/tenor.gif', 'https://media.tenor.com/images/d3371ce77fc12c69df7b9c4aed02eefe/tenor.gif', 'https://media.tenor.com/images/dff6280bf151fa1d81ffbd052e70f804/tenor.gif', 'https://media.tenor.com/images/a0fe4b017f8d3201c7bba8ca20eff7c7/tenor.gif', 'https://media.tenor.com/images/49f2272acb15a5164145075c35af940b/tenor.gif', 'https://media.tenor.com/images/f9dc89835ed393e939642c1c8ef544ec/tenor.gif', 'https://media.tenor.com/images/7b5adffb3c191d21789b0e27888680f7/tenor.gif', 'https://media.tenor.com/images/2b016f7a432eff001b5be6a205a6d146/tenor.gif', 'https://media.tenor.com/images/10d417dc8d01404df5eac038ecd3ef69/tenor.gif']
    message.channel.send('Загрузка...').then(message => {
        message.delete();

        let spEmbed = new Discord.RichEmbed();
        spEmbed.setAuthor(`Ваааай,какой же красивo~`, message.guild.iconURL);
        spEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
        spEmbed.setColor('RANDOM');
        spEmbed.setTimestamp();
        spEmbed.setFooter('Витуська^^ | Зефирка♥#6382', bot.user.displayAvatarURL);

        message.channel.send(spEmbed)
    });
}

module.exports.config = {
    name: "space",
    aliases: ["sp"],
    description: "WOW"
}