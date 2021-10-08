const TelegramBot = require('node-telegram-bot-api')

const token = '2076361978:AAHGwU-tjNNJiDCH40vZOWvs0RNhaTSgSks'

const bot = new TelegramBot(token, {
    polling: true
})
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    let text = msg.text
    let space = '-';
    let link = '';
    let transl = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'e',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'j',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'h',
        'ц': 'c',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'sh',
        'ъ': space,
        'ы': 'y',
        'ь': space,
        'э': 'e',
        'ю': 'yu',
        'я': 'ya'
    }
    if (text != '')
        text = text.toLowerCase();

    for (var i = 0; i < text.length; i++) {
        if (/[а-яё]/.test(text.charAt(i))) { 
            link += transl[text.charAt(i)];
        } else if (/[a-z0-9]/.test(text.charAt(i))) { 
            link += text.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space;
        }
    }

    bot.sendMessage(chatId, `Lotin xarif - ${link}`)
})