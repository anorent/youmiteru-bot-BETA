const Discord = require("discord.js");

const { letterTrans } = require('custom-translate');
module.exports.run = async(bot, message, args, ops) => {
    if(message.guild.id == ops.bl) return;
    var dictionary = {
        "a": "ɐ",
        "b": "q",
        "c": "ɔ",
        "d": "p",
        "e": "ǝ",
        "f": "ɟ",
        "g": "ƃ",
        "h": "ɥ",
        "i": "ᴉ",
        "j": "ɾ",
        "k": "ʞ",
        "m": "ɯ",
        "n": "u",
        "p": "d",
        "q": "b",
        "r": "ɹ",
        "t": "ʇ",
        "u": "n",
        "v": "ʌ",
        "w": "ʍ",
        "y": "ʎ",
        "A": "∀",
        "C": "Ɔ",
        "E": "Ǝ",
        "F": "Ⅎ",
        "G": "פ",
        "J": "ſ",
        "L": "˥",
        "M": "W",
        "P": "Ԁ",
        "T": "┴",
        "U": "∩",
        "V": "Λ",
        "W": "M",
        "Y": "⅄",
        "1": "Ɩ",
        "2": "ᄅ",
        "3": "Ɛ",
        "4": "ㄣ",
        "5": "ϛ",
        "6": "9",
        "7": "ㄥ",
        "9": "6",
        ",": "'",
        ".": "˙",
        "'": ",",
        "\"": ",,",
        "_": "‾",
        "&": "⅋",
        "!": "¡",
        "?": "¿",
        "`": ","
    }
    const text = args.join(' ');
    const converted = letterTrans(text, dictionary);
    message.channel.send(converted);
}

module.exports.config = {
    name: "textflip",
    aliases: [],
    description: "kuk"
}