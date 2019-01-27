module.exports.run = async (bot, message, args) => {
  function play(connection, message) {
      var server = servers[message.guild.id];

      server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

      server.queue.shift();

      server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
          else connection.disconnect();
      });
  }

  var servers = {}

  if(!args[1]) return message.channel.send('**Укажите ссылку на трек**');
  if(!message.member.voiceChannel) return message.channel.send('**Вы должны быть в голосовом чате**');

  if(!servers[message.guild.id]) server[message.guild.id] = {
    queue: []
  }

  var server = servers[message.guild.id];

  server.queue.push(args[1]);

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);
  });

}

module.exports.config = {
  name: "play",
  aliases: [],
  description: "Воспроизводит музыку"
}
