module.exports.run = async (bot, message, args) => {
  var server = servers[message.guild.id];

  if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}

module.exports.config = {
  name: "stop",
  aliases: [],
  description: "stops"
}
