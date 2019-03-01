module.exports.run = async (bot, message, args) => {
  if(message.content === 'Привет', 'Здравствуйте', 'Даров', 'Здарова') {
    message.react('👋');
  }
}

module.exports.config = {
  description: "Реагирует на сообщения приветствия"
}
