module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;



    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('Список пуст, а значит никакой музыки нет');

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Тебя нет со мной в голосовом канале');

    if (!fetched.dispatcher.paused) return message.channel.send('Невозможно это сделать');

    fetched.dispatcher.resume();

    message.channel.send(`Продолжаем концерт▶ | Сейчас играет ${fetched.queue[0].songTitle}`);




}

module.exports.config = {
    name: "resume",
    aliases: [],
    description: "lul"
}

//*********      ***********    *************    ***********
//*********      ***********    *************    ***********
//***            ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***********          (не пидор)
//***            ***            ***       ***    ***
//*********      ***            *************    *** 
//*********      ***            *************    ***