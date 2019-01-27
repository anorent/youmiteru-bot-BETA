module.exports.run = async (bot, message, args) => {
  var server = servers[message.guild.id];

  if(server.dispatcher) server.dispatcher.end();
}

module.exports.config = {
  name: "skip",
  aliases: [],
  description: "skip"
}
