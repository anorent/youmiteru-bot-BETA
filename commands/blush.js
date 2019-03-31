const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    // message.delete();

    let user = message.author.username;

    const urls = ['https://media1.tenor.com/images/ce66f42bb8dbaf08f361d3c3bb0ff3ab/tenor.gif?itemid=11352124', 'https://media1.tenor.com/images/c0a9bb579552da7fbf71d105b9676f3d/tenor.gif?itemid=12550758', 'https://media1.tenor.com/images/d9b08d9984e694111ba7107c198f85b7/tenor.gif?itemid=5634600', 'https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309']
    message.channel.send('Загрузка...').then(message => {
        message.delete();

        let blEmbed = new Discord.RichEmbed();
        blEmbed.setAuthor(`${user} покраснел(-а)^^`, message.guild.iconURL);
        blEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
        blEmbed.setColor('RANDOM');
        blEmbed.setTimestamp();
        blEmbed.setFooter('Yomi| Зефирка♥#6382', bot.user.displayAvatarURL);

        message.channel.send(blEmbed)
    });
}

module.exports.config = {
    name: "blush",
    aliases: [],
    description: "Няшка-стесняшка^^"
}
