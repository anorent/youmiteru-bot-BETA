const Discord = require("discord.js");
const bot = new Discord.Client();
const frames = [
    '(-°□°)-  ┬─┬',
    '(╯°□°)╯    ]',
    '(╯°□°)╯  ︵  ┻━┻',
    '(╯°□°)╯       [',
    '(╯°□°)╯           ┬─┬'
];
module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    message.delete()
    const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;
}

module.exports.config = {
    name: "atableflip",
    aliases: ["atf"],
    description: "aeeeeee"
}