const TelegramBot = require('node-telegram-bot-api')
const token = '2098039363:AAFQg6GwVqCTVPN4K0cIMYM4RGxTgtTanRg';
const bot = new TelegramBot(token, {
    polling: true
});


let son = null
let check = false
let count = 0
let dress = [{
        title: 'Oq futbolka',
        price: 7500,
        color: 'oq',
        size: "XXXL"
    },
    {
        title: 'Svitshot',
        price: 17500,
        color: 'qora',
        size: "L"
    },
    {
        title: 'Jinsi',
        price: 25500,
        color: 'ko`k',
        size: "M"
    }
]


bot.onText(/\/gapla/, msg => {
    const {
        id
    } = msg.chat
    bot.sendMessage(id, 
        `<b>${dress[count].title}</b>\n <u>${dress[count].price}so'm</u>\n<b>${dress[count].color.toUpperCase()}</b>\n<i>${dress[count].size}</i>
        `, 
        {
            parse_mode: 'html',
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: '👈 Orqaga',
                        callback_data: 'prev'
                    },
                    {
                        text: (count+1)+'/'+dress.length,
                        callback_data: 'current'
                    },
                    {
                        text: 'Keyingisi 👉',
                        callback_data: 'next'
                    }
                ]
            ]
        }
    })
})


bot.on('callback_query', query =>{
        if(query.data == 'next'){
            if(dress.length>=count)
            count++
        }else if ( query.data == 'prev'){
            if (count>0)
            count--
        }
        bot.sendMessage(query.from.id, `<b>${dress[count].title}</b>\n <u>${dress[count].price}so'm</u>\n<b>${dress[count].color.toUpperCase()}</b>\n<i>${dress[count].size}</i>
        `,{
            parse_mode:'html',
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: '👈 Orqaga',
                            callback_data: 'prev'
                        },
                        {
                            text: (count + 1) + '/' + dress.length,
                            callback_data: 'current'
                        },
                        {
                            text: 'Keyingisi 👉',
                            callback_data: 'next'
                        }
                    ]
                ]
            }
        } )
})