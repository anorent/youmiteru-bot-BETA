const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} is online`)
        //bot.user.setActivity("Префикс: r!", { type: "STREAMING", url: "https://www.twitch.tv/strandable" });

    let statuses = [
        "v!help",
        `over ${bot.users.size} пользователей`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "STREAMING" })

    }, 180000)

}