const ytdl = require('ytdl-core');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;


    if (!message.member.voiceChannel) return message.channel.send('Зайдите в любой голосовой канал');


    if (!args[0]) return message.channel.send('Укажите ссылку');
    let validate = await ytdl.validateURL(args[0]);



    if (!validate) {
        let commandFile = require('./search.js');
        return commandFile.run(bot, message, args, ops);

    }

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id

    });

    if (!data.dispatcher) play(bot, ops, data);
    else {
        message.channel.send(`Добавлено в очередь: ${info.title} | Добавил: **${message.author.id}**`)
    }
    ops.active.set(message.guild.id, data);


}
async function play(bot, ops, data) {
    bot.channels.get(data.queue[0].announceChannel).send(`Сейчас играет: ${data.queue[0].songTitle} | Добавил: **${data.queue[0].requester}**`);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(bot, ops, this);

    });

}

function end(bot, ops, dispatcher) {

    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(bot, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;

        if (vc) vc.leave();

    }

}





//banner 
//*********      ***********    *************    ***********
//*********      ***********    *************    ***********
//***            ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***********          (не пидор)
//***            ***            ***       ***    ***
//*********      ***            *************    *** 
//*********      ***            *************    ***




module.exports.config = {
    name: "play",
    aliases: [],
    description: "Music"
}