module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;


    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send('Музыка не воспроизводится, а значит пропускать нечего');

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Зайди ко мне в голосовой канал, а затем уже используй эту команду');

    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount / 2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Вы уже проголосовали. ${fetched.queue[0].voteSkips.length}/${required} хотят пропустить это`);

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if (fetched.queue[0].voteSkips.length >= required) {
        message.channel.send('Пропущенно! | ⏭');
        return fetched.dispatcher.emit('end');
    }

    message.channel.send(`Вы проголосовали за пропуск.${fetched.queue[0].voteSkips.length}/${required} людей проголосовали за пропуск `)













}

module.exports.config = {
    name: "skip",
    aliases: [],
    description: "lol"
}

//*********      ***********    *************    ***********
//*********      ***********    *************    ***********
//***            ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***     ***
//*********      ***            ***       ***    ***********          (не пидор)
//***            ***            ***       ***    ***
//*********      ***            *************    *** 
//*********      ***            *************    ***