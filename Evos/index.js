const TelegramBot = require('node-telegram-bot-api');
const token = '2063619135:AAEWQHI_OpRrh6ESn4WhvzRQfsXk2Kfx4tM';
const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/yordam/, msg => {
    const {id} = msg.chat
    bot.sendMessage(id, 'Klavyatura',{
        reply_markup:JSON.stringify({
            keyboard:[
                ['🛒 Buyurtma berish'],
                ['💴 Mening buyurtmalrim', '👨‍👩‍👦 Evos oilasi'],
                ['📋 Izoh qoldirish', '⚙️ Sozlamalar']
            ]
        })
    });
});


bot.on('message', (msg) => {
    const {id} = msg.chat
    let textArr = msg.text.split(' ')
    textArr.shift()
    const text = textArr.join(' ')
    let sendMsg = ''
    if (text == 'Buyurtma berish'){
        sendMsg = 'Navbatingiz -' +parseInt(Math.random()*100)
    } else if (text == 'Mening buyurtmalrim') {
        sendMsg = 'dskajdkjd kjaks jak '
    }else if (text == 'Evos oilasi'){
        sendMsg = 'Bu bizning oila'
    }else if (text == 'Sozlamalar'){
        sendMsg = 'Ismingizni o`zgartiring'
    }else{
        sendMsg = 'Buyruq topilmadi'
    }
    bot.sendMessage(id,sendMsg);
});