const Discord = module.require('discord.js');

module.exports.run = async(bot, message, args) => {

    //console.log(args[0]);// user
    //console.log(args[1]);// role
    //console.log(args[2]);//time

    if (message.member.hasPermission("ADMINISTRATOR")) {

        if (!args) {
            return message.channel.send(":x: " + "| Введите новое имя");
        }
        message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send("Я сменила имя на " + args.join(" ") + "!")).catch(console.error);
    } else {
        return message.reply(":x: " + "| У вас нет права \"ADMINISTRATOR\"")
    }
}

module.exports.config = {
    name: "rename",
    aliases: [],
    description: "Переименование"
}