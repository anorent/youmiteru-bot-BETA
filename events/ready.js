const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity(`See ${bot.users.size} users`, { type: "STREAMING", url: "https://www.twitch.tv/strandable" });

    let statuses = [
        `Prefix: !` 
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "STREAMING" })

        }, 1800000)

   bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🙋┋join-log');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
        .setTitle("Добро Пожаловать!")
        .setAuthor(member.user.username, member.user.avatarURL)
        .setColor(0x8a57e5)
        .setDescription("Здравствуй " + member.user.username + ".\n Добро Пожаловать на Youmiteru!")
        .setImage(member.user.avatarURL)
        .setTimestamp()
    channel.send({embed});
});
bot.on("guildMemberRemove", (member) => {
    const channel = member.guild.channels.find(ch => ch.name === '🏃┋leave-log');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
        .setTitle("User Left")
        .setAuthor(member.user.username, member.user.avatarURL)
        .setColor(0x8a57e5)
        .setDescription("Пользователь " + member.user.username + " ливнул .")
        .setImage(member.user.avatarURL)
        .setTimestamp()
    channel.send({embed});
});
}
