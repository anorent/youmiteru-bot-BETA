// Я объявил глобальные переменные в index.js, так что не нужно объявлять их еще раз
// До сих пор не пойму, почему вы это не сделали...

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Загрузка...");

  //  Я предполагаю что это должно быть больше
  const urls = ['https://media.tenor.com/images/fa5b1b76911f1a52a745b656913eb4dc/tenor.png', 'https://i.kym-cdn.com/photos/images/original/000/977/918/d7e.gif', 'https://i.pinimg.com/originals/f5/ed/8b/f5ed8b61442b291ce583d3c44bb9a4c7.jpg', 'https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif', 'https://pa1.narvii.com/6329/176ede60fa21c6edaeb17e5ae26bc5e355cf1212_hq.gif', 'https://vignette.wikia.nocookie.net/dewikia/images/8/83/Anime_Happy_gewinner.gif/revision/latest?cb=20151109154441'];

  let hEmbed = new Discord.RichEmbed();
    .setColor('RANDOM');
    .setAuthor('Кое-кто счастлив!', message.guild.iconURL);
    .setImage(urls[Math.floor(Math.random() * urls.length)]);
    .setTimestamp();
    .setFooter(`Druid^^`, bot.user.displayAvatarURL);

  message.channel.send(hEmbed);

  msg.delete();
}

module.exports.config = {
  name: "happy",
  aliases: [],
  description: "Отправляет мем^^"
}
