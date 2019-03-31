const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();

    const idk = ["https://media1.tenor.com/images/0f06fd15d46641cfc467228edd51c289/tenor.gif?itemid=12352139", "https://media.tenor.com/images/fb673fb58569df31fa0e2bbf98914bc6/tenor.gif", "https://media1.tenor.com/images/7b6cc7bc8ab9b6622f9f4ad5a4fe1697/tenor.gif?itemid=9338142", "https://media.tenor.com/images/139d03194c9d84f4fe561c2d889a3960/tenor.gif", "https://media.tenor.com/images/1c851e3a5f064fadef0d47ff8ea927bd/tenor.gif", "https://media1.tenor.com/images/dbe1ca7fdb532cf96a9bea40fa1f406e/tenor.gif?itemid=9724581"];

    const embed = new Discord.RichEmbed()
        .setTitle(`Huh?`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(idk[Math.floor(Math.random() * idk.length)]);

    message.channel.send(embed);
};

module.exports.config = {
    name: "idk",
    aliases: [],
    description: "idk"
}