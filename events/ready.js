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

    ] 

 setInterval( () => {
let voice = 0;
                client.guilds.get("485018137134235648").channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
client.channels.get("565552384361627663").setName(`Голосовой\u2009онлайн:\u2009${voice}`)
}, 5000)
    }, 1800000)

}

