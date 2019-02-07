module.exports.run = async(bot, message, args) => {
  message.delete();

  message.channel.send('**Подождите...**').then(message => {
    message.delete();

    let eghEmbed = new Discord.RichEmbed();
        eghEmbed.setTitle('Помощь по Эмбед генератору');
        eghEmbed.setDescription('```fix\nДанная команда поможет вам разобраться в механизме Генератора```');
          eghEmbed.addField('Синтаксис', '```cs\n # Текстовое поле: <Заголовок> <Ваш Текст> \n # Картинка: просто загружаете картинку \n \n # Где <> - обязательный параметр```');
          eghEmbed.addField('Что это из себя представляет?', 'Генератор Эмбед сообщений, как не странно');
          eghEmbed.addField('Синтаксис Текстового поля кажется мне странным', '**Discord.js** воспринимает текст именно так (В этом можно убедиться, прочитав документацию). Я оставлю скриншот, чтоб было понятнее');
          eghEmbed.addField('Что отправлять первым? Текст или Картинку?', 'Что вам удобнее...');
          eghEmbed.setTimestamp();
          eghEmbed.setColor('RANDOM');
        eghEmbed.setImage('https://cdn.discordapp.com/attachments/542059731842498571/542060208470360066/unknown.png');
        eghEmbed.setFooter('Druid^^', bot.user.displayAvatarURL);

        message.channel.send(eghEmbed);
  });
}

module.exports.config = {
  name: "embedGeneratorHelp",
  aliases: ["eh"],
  description: "help"
}
