const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const user = message.mentions.users.first();

    const awoos = ["https://i.kym-cdn.com/photos/images/original/000/910/236/1aa.gif", "https://mlpol.net/mlpol/archive/src/1512199102126.gif", "https://i.4pcdn.org/pol/1495492124401.gif", "https://steamusercontent-a.akamaihd.net/ugc/927045630485244822/28BE52DBCB3B4912208C159EAFEC16CD3E7344C4/", "https://steamusercontent-a.akamaihd.net/ugc/577947132577779178/E9FFD0D5E1A02413782AAC1352BB9BF2338697CE/", "https://steamuserimages-a.akamaihd.net/ugc/477768284584642459/A91D3E4BB3074233A0481124AC760D601B0B486D/", "https://thumbs.gfycat.com/PiercingRewardingBettong-small.gif", "https://steamuserimages-a.akamaihd.net/ugc/951845216964270625/848D28549A6523EE1098DB7FE3270151697DF246/", "https://i.imgur.com/CoQzwGf.gif", "https://media.giphy.com/media/60MPTk32fKQ92/giphy.gif", "https://thumbs.gfycat.com/CrispLiquidGoshawk-small.gif", "https://thumbs.gfycat.com/BronzeMilkyEgg-max-1mb.gif"];

    const embed = new Discord.RichEmbed()
        .setTitle(`Awooooooooooooo!`)
        .setColor("#9669FE")
        .setTimestamp()
        .setImage(awoos[Math.floor(Math.random() * awoos.length)]);

    message.channel.send(embed);
};

module.exports.config = {
    name: "awoo",
    aliases: [],
    description: "awoo"
}