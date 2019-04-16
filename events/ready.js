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

if(newState.channel === null || newState.channel.id !== '567736089587220481') return
    const category = newState.guild.channels.find(c => c.id === '487930672694951936')
    const channels = newState.guild.channels
    const member = newState.member
    const guild = newState.guild
    
    if (channels.find(c => c.name === member.user.username) === undefined) {
        const newChannel = channels.create(member.user.username, { 
            type: 'voice',
            topic: 'Личный канал пользователя ' + member.user.username,
            parent: category,
            permissionOverwrites: [
                {
                    id: member.user.id,
                    allow: [ 'CREATE_INSTANT_INVITE',
                        'MANAGE_CHANNELS',
                        'PRIORITY_SPEAKER',
                        'VIEW_CHANNEL',
                        'SEND_MESSAGES',
                        'READ_MESSAGE_HISTORY',
                        'CONNECT',
                        'SPEAK',
                        'MUTE_MEMBERS',
                        'DEAFEN_MEMBERS',
                        'MOVE_MEMBERS',
                        'USE_VAD',
                        'MANAGE_ROLES',
                        'MANAGE_WEBHOOKS',
                        'MANAGE_EMOJIS' ]
                },

                {
                    id: guild.id,
                    deny: [ 'VIEW_CHANNEL' ]
                }
            ] })
    
        newChannel.then((value) => {
            return member.setVoiceChannel(value)
        })
    } else {
        const oldChannel = guild.channels.find(c => c.name === member.user.username)
        return member.setVoiceChannel(oldChannel)
    }); 

     setInterval( () => {
    let voice = 0;
        bot.guilds.get("485018137134235648").channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
    bot.channels.get("566351514831028234").setName(`Голосовой\u2009онлайн:\u2009${voice}`)
    }, 5000)
   bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '「📜」приветствия');
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
    const channel = member.guild.channels.find(ch => ch.name === '🛎┋leave-log');
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
