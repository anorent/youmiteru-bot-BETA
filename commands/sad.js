module.exports.run = async (bot, message, args) => {
  // message.delete();

  let user = message.author.username;

  const urls = ['https://data.whicdn.com/images/236715798/original.gif', 'https://media1.tenor.com/images/15a61f683344f0bdcfd06c9e4d26829e/tenor.gif?itemid=10932405', 'https://4.bp.blogspot.com/-_PW-1Sx8YGw/XACAcnjiI7I/AAAAAAAAExo/u8BW6-b5wZQJ5oty5zCdyk7kylPJZZ6TQCLcBGAs/s640/282.gif', 'https://i.gifer.com/3kUR.gif', 'https://i.pinimg.com/originals/73/b1/3b/73b13bcd2590cd93ca1ca9bbc7f917be.gif', 'https://media1.tenor.com/images/5f6e18ca478a28a418d6daa9e2eb6e33/tenor.gif?itemid=9188257'];

  message.channel.send('**Загрузка...**').then(message => {
    message.delete();

    let sEmbed = new Discord.RichEmbed();
    sEmbed.setAuthor(`${user} ушел в печаль...`, message.guild.iconURL);
      sEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
      sEmbed.setColor('RANDOM');
      sEmbed.setTimestamp();
    sEmbed.setFooter('Druid | Be silent', bot.user.displayAvatarURL);

    message.channel.send(sEmbed)
  });
}

module.exports.config = {
  name: "sad",
  aliases:[],
  description: "Грустим..."
}
