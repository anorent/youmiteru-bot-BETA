const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args) => {
    // message.delete();

    let user = message.author.username;

    const urls = ['https://media1.tenor.com/images/a39aadfda75f87d6981526087e4fe23f/tenor.gif?itemid=7795215', 'https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166', 'https://media.tenor.com/images/7e4f514018b7b8901a957d7b5b2c494b/tenor.gif'];

    message.channel.send('Загрузка...').then(message => {
        message.delete();

        let suEmbed = new Discord.RichEmbed();
        suEmbed.setAuthor(`${user} совершил суицид...`, message.guild.iconURL);
        suEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
        suEmbed.setColor('ff0000');
        suEmbed.setTimestamp();
        suEmbed.setFooter('Витуська^^ | Зефирка♥#6382', bot.user.displayAvatarURL);

        message.channel.send(suEmbed)
    });
}

module.exports.config = {
    name: "suicide",
    aliases: [],
    description: "Смерть..."
}