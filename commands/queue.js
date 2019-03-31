module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;



    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('Тут ещё пока ничего нет');

    let queue = fetched.queue;

    let nowPlaying = queue[0];

    let resp = `__**Сейчас играет**__\n**${nowPlaying.songTitle}** -- **Добавил :** *${nowPlaying.requester}*\n\n__**Ждут воспроизведения:**__\n`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Добавил:** *${queue[i].requester}*\n`;
    }
    message.channel.send(resp);

}

module.exports.config = {
    name: "queue",
    aliases: ["q"],
    description: "queue"
}

//*********      ***********    *************    ***********
//*********      ***********    *************    ***********
//***            ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***********          (не пидор)
//***            ***            ***       ***    ***
//*********      ***            *************    *** 
//*********      ***            *************    ***