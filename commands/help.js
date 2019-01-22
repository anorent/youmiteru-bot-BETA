const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix


module.exports.run = async(bot, message, args) => {

    if (args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if (args[0]) {
        let command = args[0];
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RischEmbed()
                .setColor(colours.violet)
                .setAuthor('Витуся^^ Помощь', message.guild.iconURL)
                .setDescription(`Префикс Виты: ${prefix}\n\n**Команда:** ${command.config.name}\n**Описание:** ${command.config.description || "Нет описания"}\n**Использование:** ${command.config.usage || "No Usage"}\n**Доступно:** ${command.config.accesableby || "Members"}\n**Варианты:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }
    }

    if (!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor('Помощь по командам', message.guild.iconURL)
            .setColor(colours.cyan)
            .setDescription(`${message.author.username} проверьте личные сообщения!`)

        let Sembed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor('Витуся^^ Помощь', message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setTimestamp()
            .setDescription(`Это доступные для вас команды\n Префикс бота: ${prefix}`)
            .addField(`Команды:`, "``cat`` ``dog`` ``meme`` ``help`` ``serverinfo`` ``userinfo``")
            .setFooter("Витуся^^", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "cmd"],
    usage: "v!usage",
    description: "Помощь по командам",
    accesableby: "Members"
}