const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args) => {
    // message.delete();

    let user = message.author.username;

    const urls = ['https://media1.tenor.com/images/a36fbb95a4f6a35805d619544d45476d/tenor.gif?itemid=12811160', 'https://media1.tenor.com/images/4e222fa7136e957a7c10a93ecb447274/tenor.gif?itemid=12825242', 'https://media1.tenor.com/images/ae5d5dbe4fdd7d6f64dd1370e594db31/tenor.gif?itemid=9168285', 'https://media1.tenor.com/images/44d764c6ffe09bd165643aae33aa98f9/tenor.gif?itemid=7329079', 'https://media1.tenor.com/images/2fb2965acbf3ed573e8b63080b947fe5/tenor.gif?itemid=5091716', 'https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314'];

    message.channel.send('Загрузка...').then(message => {
        message.delete();

        let sEmbed = new Discord.RichEmbed();
        sEmbed.setAuthor(`${user} ушёл в депрессию...`, message.guild.iconURL);
        sEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
        sEmbed.setColor('ff0000');
        sEmbed.setTimestamp();
        sEmbed.setFooter('Витуська^^ | Зефирка♥#6382', bot.user.displayAvatarURL);

        message.channel.send(sEmbed)
    });
}

module.exports.config = {
    name: "depression",
    aliases: ["dep"],
    description: "Грустненька немнога..."
}