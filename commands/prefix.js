const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    if (message.member.id != ops.ownerID) return message.reply("Я не знаю всё,но точно знаю то,что у тебы нет прав для этой команды");
    if (!args[0] || args[0 === "help"]) return message.reply("Использование: ``v!prefix <новый префикс>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let prEmbed = new Discord.RichEmbed()
        .setColor("ff9900")
        .setTitle("***Префикс был успешно изменён!***")
        .setDescription(`Изменено на ${args[0]}`);

    message.channel.send(prEmbed);

}

module.exports.config = {
    name: "prefix",
    aliases: ["pref"],
    description: "Настраиваемые префиксы"
}
