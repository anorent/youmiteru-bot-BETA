const Discord = require('discord.js');

module.exports.run = async(bot, message, args, ops) => {
    if (message.member.id != ops.ownerID) return;
    if (message.member.id == ops.ownerID) {

        const embed = new Discord.RichEmbed()
            .setTitle('**Турнир по игре Osu!**')
            .setDescription('Привет всем!!!\n25.03.2019 Будет проводиться пробный турнир по OSU! \nЛюди поделятся на 2 команды. \nОдна будет проходить карты 5-6 :star: . \nВторая будет проходить карты 3-4 :star: . \nТурнир будет проходить в Голосовом канале ┋:video_game:┋ Играем. \n **ПРОШУ ВАС ЗАРАНЕЕ СКАЧАТЬ КАРТЫ И ПОИГРАТЬ НА НИХ**')
            .setThumbnail('https://cdn.discordapp.com/emojis/554310104955224064.png')
            .addField('**Призы за 5-6 :star:**', 'Вознаграждение за **1** место: ***100000*** \<:Ymiteru:552465926075842560> \n Вознаграждение за **2** место: ***50000*** \<:Ymiteru:552465926075842560> \n Вознаграждение за **3** место: ***25000*** \<:Ymiteru:552465926075842560> \n Вознаграждение за **участие**: ***10000*** \<:Ymiteru:552465926075842560>')
            .addField('**Призы за 3-4 :star:**', 'Вознаграждение за **1** место: ***50000*** \<:Ymiteru:552465926075842560>\nВознаграждение за **2** место: ***25000*** \<:Ymiteru:552465926075842560>\n Вознаграждение за **3** место: ***15000*** \<:Ymiteru:552465926075842560> \nВознаграждение за **участие**: ***10000*** \<:Ymiteru:552465926075842560>')
            .setColor('#ff588b')
            .addField('**Ссылки на карты 3-4 :star: **', 'https://osu.ppy.sh/beatmapsets/100628#osu/266925\nhttps://osu.ppy.sh/beatmapsets/716719/#osu/1514412\nhttps://osu.ppy.sh/beatmapsets/181917#osu/436442\nhttps://osu.ppy.sh/beatmapsets/332532#osu/736215\nhttps://osu.ppy.sh/beatmapsets/873010#osu/1825067')
            .addField('**Ссылки на карты 5-6 :star: **', 'https://osu.ppy.sh/beatmapsets/371128#osu/814293\nhttps://osu.ppy.sh/beatmapsets/391823#osu/853412\nhttps://osu.ppy.sh/beatmapsets/586322#osu/1241749\nhttps://osu.ppy.sh/beatmapsets/394729#osu/880198\nhttps://osu.ppy.sh/beatmapsets/446774#osu/959406')
            .setFooter('Организатор | Печка💎#2753');
        message.channel.send(embed)

    }
}

module.exports.config = {
    name: 'osutornament',
    aliases: ['osut'],
    description: "rtrt"
}