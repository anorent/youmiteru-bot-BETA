const Discord = module.require('discord.js');

module.exports.run = async(bot, message, args) => {

    ROLEZZ = message.guild.roles.array()

    var ROLES = "";

    ROLEZZ.forEach(function(element) {
        ROLES += element.name + "\n"
    });

    message.channel.send("```" + "\n" +
        "---------------------------------" + "\n" +
        "Роли сервера:" + "\n" +
        "---------------------------------" + "\n" +
        `${ROLES}` + "```");

}

module.exports.config = {
    name: "roles",
    aliases: [],
    description: "Список ролей"
}