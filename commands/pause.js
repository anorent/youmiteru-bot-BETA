module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;


    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('Я не воспроизвожу музыку на данный момент, так что останавливать нечего');

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Тебя нет со мной в голосовом канале');

    if (fetched.dispatcher.paused) return message.channel.send('Я и так на паузе стою уже');

    fetched.dispatcher.pause();

    message.channel.send('Музыка поставлена на паузу | ⏸');




}

module.exports.config = {
    name: "pause",
    aliases: [],
    description: "lmao what"
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