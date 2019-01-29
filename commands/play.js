module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.channel.send('**Укажите ссылку на трек**');
  if(!message.member.voiceChannel) return message.channel.send('**Вы должны быть в голосовом чате**');

  let validate = await ytdl.validateURL(args[0]);

  if(!validate) return message.channel.send('Введите **действительную** ссылку');

  let info = await ytdl.getInfo(args[0]);

  let connection = await message.member.voiceChannel.join();

  let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}));

  message.channel.send(`Сейчас играет **${info.title}**`);
}

module.exports.config = {
  name: "play",
  aliases: [],
  description: "Воспроизводит музыку"
}
