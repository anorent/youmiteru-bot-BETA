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
     setInterval( () => {
    let voice = 0;
        bot.guilds.get("485018137134235648").channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
    bot.channels.get("566351514831028234").setName(`Голосовой\u2009онлайн:\u2009${voice}`)
    }, 5000)
   bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '「📜」приветствия');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
        .setTitle("Новый пользователь")
        .setAuthor(member.user.username, member.user.avatarURL)
        .setColor(0x8a57e5)
        .setDescription("Пользователь " + member.user.username + " пришёл.\n Желаем ему хорошо провести время!")
        setImage(member.user.avatarURL)
        .setTimestamp()
    channel.send({embed});
});
bot.on("guildMemberRemove", (member) => {
    const channel = member.guild.channels.find(ch => ch.name === '「📜」приветствия');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
        .setTitle("Вышедший пользователь")
        .setAuthor(member.user.username, member.user.avatarURL)
        .setColor(0x8a57e5)
        .setDescription("Пользователь " + member.user.username + " ушёл.\n Мы будем по тебе скучать!")
        .setImage(member.user.avatarURL)
        .setTimestamp()
    channel.send({embed});
});
}
