module.exports.run = async (bot, message, args) => {

  let user = message.author.username;

  const urls = ['https://vk.com/doc272230928_485982901', 'https://thumbs.gfycat.com/HarmoniousPlayfulDanishswedishfarmdog-small.gif', 'https://media1.tenor.com/images/a092ae03cba30f89fff3278c21d1a426/tenor.gif?itemid=4718216', 'https://thumbs.gfycat.com/GorgeousIncompatibleJerboa-small.gif', 'http://peachy.p.e.pic.centerblog.net/d3aeaba6.gif', 'https://media1.tenor.com/images/7d8ebb6b8f44e7bcd197c53febfa8334/tenor.gif?itemid=7409051'];

  message.channel.send('**Загрузка...**').then(message => {
    message.delete();

    let slEmbed = new Discord.RichEmbed();
    slEmbed.setAuthor(`${user} ушёл спать`, message.guild.iconURL);
      slEmbed.setColor('RANDOM');
      slEmbed.setImage(urls[Math.floor(Math.random() * urls.length)]);
      slEmbed.setTimestamp();
    slEmbed.setFooter('Druid | Be silent', bot.user.displayAvatarURL);

    message.channel.send(slEmbed);
  });
}

module.exports.config = {
  name: "sleep",
  aliases: ["sl"],
  description: "Идем спатки^^"
}
