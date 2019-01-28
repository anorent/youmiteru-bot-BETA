const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args) => {
    // message.delete();

    let user = message.author.username;

    const urls = ['https://media1.tenor.com/images/59371e16bf2c92a158a0bf84e1e70bb6/tenor.gif?itemid=12479110', 'https://media1.tenor.com/images/0a3203ced13826a92230cc61214318da/tenor.gif?itemid=5243518', 'https://media1.tenor.com/images/dd10eb337856d14a8640828f99dd7a2f/tenor.gif?itemid=12479111', 'https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361'];

    message.channel.send('Загрузка...').then(message => {
        message.delete();

        let uEmbed = new Discord.RichEmbed();
        uEmbed.setAuthor(`${user} в кого-то влюбился^^`, message.guild.iconURL);
        uEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
        uEmbed.setColor('ff0000');
        uEmbed.setTimestamp();
        uEmbed.setFooter('Витуська^^ | Зефирка♥#6382', bot.user.displayAvatarURL);

        message.channel.send(uEmbed)
    });
}

module.exports.config = {
    name: "love",
    aliases: [],
    description: "Любовь"
}