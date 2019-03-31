const Discord = require("discord.js");

module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;

    if (!args[0]) {
        message.delete();

        let Sembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor('Youmiteru Помощь')
            .setThumbnail(bot.user.displayAvatarURL)
            .setTimestamp()
            .setDescription(`Это доступные для вас команды\n Префикс бота: v!`)
            .addField(`🎭 | Действия и эмоции:`, " ``poke`` ``sleepy`` ``waa``  ``lick`` ``pout`` ``idk`` ``pat`` ``hug`` ``slap`` ``stare`` ``thumbsup`` ``wasted`` ``nom`` ``dance`` ``suicide`` ``love`` ``blush``")
            .addField(`🔞 | NSFW:`, " ``nhent`` ``hentai`` ``porn`` ``blowjob`` ``boobs`` ``anal`` ``trap`` ")
            .addField(`👑 | Модерация:`, " ``ban`` ``lockdown`` ``clear`` ``say`` ``mute`` ``unmute`` ``prefix`` ")
            .addField(`🎵 | Музыка:`, " Временно не работает ") //``play`` ``leave`` ``skip`` ``queue`` ``resume`` ``pause``
            .addField(`🌅 | Картинки:`, " ``cat`` ``neko`` ``fox`` ``meme`` ``awoo`` ``space`` ``woof``")
            .addField(`⭕ | Прочие:`, " ``embed`` ``helpembed`` ``atableflip`` ``ship`` ``calc`` ``textflip`` ``sexyrate`` ``roleinfo`` ``helpembed`` ``weather`` ``avatar`` ``roles`` ``8ball`` ``emojify`` ``coin`` ``serverinfo`` ``userinfo`` ``stats`` ``suggestion`` ``shorten`` ")
            .addField(`Приглашение нашего публичного бота с похожим функционалом:`, "https://discordapp.com/oauth2/authorize?client_id=535735994524368911&scope=bot&permissions=8")
            .setFooter(`Youmiteru`, bot.user.displayAvatarURL)
        message.channel.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "cmd"],
    usage: "v!usage",
    description: "Помощь по командам",
    accesableby: "Members"
}
