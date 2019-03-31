const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity(`Префикс: ! | Смотрит на  ${bot.users.size} пользователей`, { type: "STREAMING", url: "https://www.twitch.tv/strandable" });

    let statuses = [
        `*Youmiteru One Love*` 
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "STREAMING" })

    }, 1800000)

}
