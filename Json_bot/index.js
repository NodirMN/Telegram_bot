const TelegramBot = require('node-telegram-bot-api');
const token = '2095503504:AAHC20CySNl6gIhLuFS2whSwyd9xDd_9J4c';
const bot = new TelegramBot(token, {
    polling: true
});

let fetch = require('cross-fetch');
let count = 0
let posts = []

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        return res.json()
    })
    .then(data => {
        posts = data
    })
    .catch(err => {
        console.error(err)
    })
/////////////////////////////////////

bot.onText(/\/start/, msg => {
    const {
        id
    } = msg.chat

    bot.sendMessage(id, `<b>${posts[count].id} | ${posts[count].title}</b>\n <code>${posts[count].body}}</code>`, {
        parse_mode: 'html',
        reply_markup: {
            inline_keyboard: [
                [{
                        text: '👈 Orqaga',
                        callback_data: 'prev'
                    },
                    {
                        text: (count + 1) + '/' + posts.length,
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


bot.on('callback_query', query => {
    if (query.data == 'next') {
        if (posts.length >= count)
            count++
    } else if (query.data == 'prev') {
        if (count > 0)
            count--
    }
        bot.sendMessage(query.from.id, `<b>${posts[count].id} | ${posts[count].title}</b>\n <code>${posts[count].body}}</code>`, {
        parse_mode: 'html',
        reply_markup: {
            inline_keyboard: [
                [{
                        text: '👈 Orqaga',
                        callback_data: 'prev'
                    },
                    {
                        text: (count + 1) + '/' + posts.length,
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