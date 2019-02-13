const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите кого вы хотите тыкнуть").catch(console.error);

    const pokes = ["https://media.tenor.com/images/c89c83c69891c474197745c2b86ce161/tenor.gif", "https://media.tenor.com/images/369ea66cd13f76b3b49d4f85b830d8ef/tenor.gif", "https://media.tenor.com/images/7eeed38fd37c7dd93b93546fa12bd174/tenor.gif", "https://media.tenor.com/images/31f7b2a2b54bc84162c901ac4f16361f/tenor.gif", "https://media.tenor.com/images/c3b9e561131197a739664c6b1ebe5622/tenor.gif", "https://media.tenor.com/images/3b849449f34e2b7f280a4edc127a1162/tenor.gif"];

    const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} тыкнул(-а) ${user.username}`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(pokes[Math.floor(Math.random() * pokes.length)]);

    message.channel.send(embed);
};

module.exports.config = {
    name: "poke",
    aliases: [],
    description: "poke"
}