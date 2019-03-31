module.exports.run = async(bot, message, args, ops) => {
  if(message.guild.id == ops.bl) return;
  if(!message.member.voiceChannel) return message.channel.send('Для начала подключитесь к голосовому каналу');
  if(!message.guild.me.voiceChannel) return message.channel.send('На даннный момент я не в голосовом канале');
  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Я не вижу тебя в канале где есть я');
  message.guild.me.voiceChannel.leave();
  
message.channel.send('Досвидания, что сказать');
 
}

module.exports.config = {
  name: "leave",
  aliases: [],
  description: "leave"
}
