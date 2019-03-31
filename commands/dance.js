const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    const user = message.mentions.users.first();

    const dances = ["https://media1.tenor.com/images/aa9374ef547c871d4626a22d24042d1f/tenor.gif?itemid=10495378", "https://media.tenor.com/images/6ba503aa67335316b1af7ca6ff1df06d/tenor.gif", "https://media.tenor.com/images/08bc37bd1daf5622edc174cabb96abb5/tenor.gif", "https://media.tenor.com/images/9768e77abb90043cfddfc731bbb4d1df/tenor.gif", "https://media.tenor.com/images/158cb79ee04d16790852b2fbb5f1eba8/tenor.gif", "https://media.tenor.com/images/b85d1396f931424b789068dc6062970b/tenor.gif", "https://media.tenor.com/images/d4f36aac64dc38384cb0e66bc91f32fc/tenor.gif", "https://media.tenor.com/images/dbe7f4dccee3bd20495947721f6bd2e9/tenor.gif", "https://media.tenor.com/images/d02d3de78e5a51853a8dc9c991d9756f/tenor.gif", "https://media.tenor.com/images/c0833b0c801c59f301879a9edbe55cc6/tenor.gif", "https://media.tenor.com/images/caa37914b0af54618d29ec46d20c1f23/tenor.gif", "https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif?itemid=9765182"];

    const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} решил(-а) потанцевать^^`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(dances[Math.floor(Math.random() * dances.length)]);

    message.channel.send(embed);
};

module.exports.config = {
    name: "dance",
    aliases: [],
    description: "dawoo"
}