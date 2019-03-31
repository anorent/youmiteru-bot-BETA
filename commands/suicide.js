const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    // message.delete();

    let user = message.author.username;

    const urls = ['https://media.tenor.com/images/74b2931121c03697ce5150058d559846/tenor.gif', 'https://media.tenor.com/images/4094a62736dab4837ced2ab59ec3f42d/tenor.gif', 'https://media1.tenor.com/images/90218906927770417ab118e00c7928cd/tenor.gif?itemid=4833028', 'https://media.tenor.com/images/6ee9c4aef029e3856ff39d9701bd12d5/tenor.gif', 'https://media1.tenor.com/images/a39aadfda75f87d6981526087e4fe23f/tenor.gif?itemid=7795215', 'https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166', 'https://media.tenor.com/images/7e4f514018b7b8901a957d7b5b2c494b/tenor.gif'];

    message.channel.send('Загрузка...').then(message => {
        message.delete();

        let suEmbed = new Discord.RichEmbed();
        suEmbed.setAuthor(`${user} совершил(-а) суицид...`, message.guild.iconURL);
        suEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
        suEmbed.setColor('ff0000');
        suEmbed.setTimestamp();
        suEmbed.setFooter(`Yomi | Зефирка♥#6382`, bot.user.displayAvatarURL)

        message.channel.send(suEmbed)
    });
}

module.exports.config = {
    name: "suicide",
    aliases: [],
    description: "Смерть..."
}