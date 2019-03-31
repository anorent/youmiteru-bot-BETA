const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    const roleName = args.join(" ");
    const role = message.guild.roles.find(r => r.name.toLowerCase() == roleName.toLowerCase());
    if (!role) return message.reply("это не похоже на название роли");
    let haveRole = message.guild.members.filter(m => m.roles.get(role.id)).size;
    const embed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setThumbnail(message.guild.iconURL)
        .setTitle('Информация о ' + role.name)
        .addField("Название", role.name)
        .addField("ID роли", role.id)
        .addField("Цвет роли (Hex)", role.hexColor)
        .addField("Позиция", role.position)
        .addField("Создана", new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "))
        .addField("Участники", `На сервере ${haveRole} участников с данной ролью.`)
        .addField("Остальное", `Выделяемая: ${role.hoist}\nРедактируемая: ${role.managed}\nУпоминаемая: ${role.mentionable}`);
    message.channel.send(embed)
}

module.exports.config = {
    name: "roleinfo",
    description: "Gives information about a role",
    aliases: ["rinfo"]
};