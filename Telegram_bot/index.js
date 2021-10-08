const TelegramBot = require('node-telegram-bot-api')

const token = '2059402026:AAGKZaAqSKSkdu9fla36bmEf1RAqSpzOoCk'

const bot = new TelegramBot(token, {
    polling: true
})
bot.on('message', (msg) => {
    const chatId = msg.chat.id


    let text = msg.text

    let wordCount = text.split(' ').length
    let words = text.split(' ').join('')
    let unliCount = 0
    let undoshCount = 0
    let raqamCount = 0
    for (let i = 0; i<text.length; i++){
        if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') 
        {
            unliCount++
        }
        if (parseInt(text[i])>=0) {
            raqamCount++
        }
    }
    undoshCount = words.length - unliCount - raqamCount
    bot.sendMessage(chatId, `Unli son - ${unliCount} \nUndosh soni - ${undoshCount} \nUmumiy so'zlar soni - ${wordCount}\nRaqamlar soni ${raqamCount}`)
    // bot.sendMessage(chatId, 'Salom, ' + msg.from.first_name)  sabsheniya jonatish

})