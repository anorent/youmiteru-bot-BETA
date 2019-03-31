module.exports.run = async(bot, message, args, ops) => {
    if (message.author.id != ops.ownerID) return message.channel.send('кажется ты  не являешься разработчиком');

    try {
        delete require.cache[require.resolve(`../commands/${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Невозможно перезагрузить команду: ${args[0]}`);
    }
    message.channel.send(`Успешно перезагружена команда: ${args[0]}`);
}

module.exports.config = {
    name: "reload",
    aliases: [],
    description: "reload"
}

/*
if(message.author.id == ops.ownerID) return message.channel.send('Kek')
*/