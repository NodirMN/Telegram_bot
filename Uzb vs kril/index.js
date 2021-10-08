const TelegramBot = require('node-telegram-bot-api');
const token = '2076361978:AAHGwU-tjNNJiDCH40vZOWvs0RNhaTSgSks';

const bot = new TelegramBot(token, {
    polling: true
});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let text = msg.text
    let lat = {
        'a': 'a',
        'i': 'и',
        'r': 'р',
        'z': 'з',
        'b': 'б',
        'k': 'к',
        's': 'с',
        'd': 'д',
        'l': 'л',
        't': 'т',
        'e': 'э',
        'm': 'м',
        'u': 'у',
        'f': 'ф',
        'n': 'н',
        'v': 'в',
        'q': 'қ',
        'g': 'г',
        'o': 'о',
        'x': 'х',
        "'": 'ъ',
        ' ': ' ',
        'h': 'х',
        'p': 'п',
        'y': 'й',
    }
    let newText = ''
    text = text.replace(/sh/g, 'ш')
    text = text.replace(/ch/g, 'ч')
    text = text.replace(/yo/g, 'ё')
    text = text.replace(/ye/g, 'е')
    text = text.replace(/g'/g, 'г')
    text = text.replace(/o'/g, 'У')

    for (let i = 0; i < text.length; i++) {
        if (lat[text[i].toLowerCase()]) {
            if (text[i].toUpperCase() == text[i]) {
                console.log(text[i]);
                newText += lat[text[i].toLowerCase()].toUpperCase()
            } else {
                newText += lat[text[i]]
            }
        } else {
            newText += text[i]
        }
    }

    bot.sendMessage(chatId, newText);
});