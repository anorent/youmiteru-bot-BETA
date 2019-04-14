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
    bot.on('message', message => {
            const channel = message.guild.channels.find(id=566878376980381706)
        channel.setName(`${message.guild.users.size} пользователей`);
    });
}
