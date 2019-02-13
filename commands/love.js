const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя").catch(console.error);

    const loves = ["https://media1.tenor.com/images/59371e16bf2c92a158a0bf84e1e70bb6/tenor.gif?itemid=12479110", "https://media1.tenor.com/images/0a3203ced13826a92230cc61214318da/tenor.gif?itemid=5243518", "https://media1.tenor.com/images/dd10eb337856d14a8640828f99dd7a2f/tenor.gif?itemid=12479111", "https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361"];

    const lembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} влюбился(-ась) в ${user.username} ^^`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(loves[Math.floor(Math.random() * loves.length)]);

    message.channel.send(lembed);
};

module.exports.config = {
    name: "love",
    aliases: [],
    description: "kk"
}